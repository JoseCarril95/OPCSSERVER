// ------------------------------------------------------------
//  Copyright (c) Microsoft Corporation.  All rights reserved.
//  Licensed under the MIT License (MIT). See License.txt in the repo root for license information.
// ------------------------------------------------------------

namespace Microsoft.Azure.IIoT.Services.OpcUa.Registry.Controllers {
    using Microsoft.Azure.IIoT.Services.OpcUa.Registry.Auth;
    using Microsoft.Azure.IIoT.Services.OpcUa.Registry.Filters;
    using Microsoft.Azure.IIoT.Services.OpcUa.Registry.Models;
    using Microsoft.Azure.IIoT.OpcUa.Api.Registry.Models;
    using Microsoft.Azure.IIoT.OpcUa.Registry;
    using Microsoft.Azure.IIoT.Http;
    using Microsoft.Azure.IIoT.Messaging;
    using Microsoft.Azure.IIoT.AspNetCore.OpenApi;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Linq;
    using System.Threading.Tasks;
    using System.ComponentModel.DataAnnotations;
    using System;

    /// <summary>
    /// Read, Update and Query Gateway resources
    /// </summary>
    [ApiVersion("2")][Route("v{version:apiVersion}/gateways")]
    [ExceptionsFilter]
    [Produces(ContentMimeType.Json)]
    [Authorize(Policy = Policies.CanQuery)]
    [ApiController]
    public class GatewaysController : ControllerBase {

        /// <summary>
        /// Create controller for Gateway services
        /// </summary>
        /// <param name="Gateways"></param>
        /// <param name="events"></param>
        public GatewaysController(IGatewayRegistry Gateways,
            IGroupRegistration events) {
            _Gateways = Gateways;
            _events = events;
        }

        /// <summary>
        /// Get Gateway registration information
        /// </summary>
        /// <remarks>
        /// Returns a Gateway's registration and connectivity information.
        /// A Gateway id corresponds to the twin modules module identity.
        /// </remarks>
        /// <param name="GatewayId">Gateway identifier</param>
        /// <returns>Gateway registration</returns>
        [HttpGet("{GatewayId}")]
        public async Task<GatewayInfoApiModel> GetGatewayAsync(string GatewayId) {
            var result = await _Gateways.GetGatewayAsync(GatewayId);
            return result.ToApiModel();
        }

        /// <summary>
        /// Update Gateway configuration
        /// </summary>
        /// <remarks>
        /// Allows a caller to configure operations on the Gateway module
        /// identified by the Gateway id.
        /// </remarks>
        /// <param name="GatewayId">Gateway identifier</param>
        /// <param name="request">Patch request</param>
        [HttpPatch("{GatewayId}")]
        [Authorize(Policy = Policies.CanChange)]
        public async Task UpdateGatewayAsync(string GatewayId,
            [FromBody] [Required] GatewayUpdateApiModel request) {
            if (request == null) {
                throw new ArgumentNullException(nameof(request));
            }
            await _Gateways.UpdateGatewayAsync(GatewayId,
                request.ToServiceModel());
        }

        /// <summary>
        /// Get list of Gateways
        /// </summary>
        /// <remarks>
        /// Get all registered Gateways and therefore twin modules in paged form.
        /// The returned model can contain a continuation token if more results are
        /// available.
        /// Call this operation again using the token to retrieve more results.
        /// </remarks>
        /// <param name="continuationToken">Optional Continuation token</param>
        /// <param name="pageSize">Optional number of results to return</param>
        /// <returns>
        /// List of Gateways and continuation token to use for next request
        /// in x-ms-continuation header.
        /// </returns>
        [HttpGet]
        [AutoRestExtension(NextPageLinkName = "continuationToken")]
        public async Task<GatewayListApiModel> GetListOfGatewayAsync(
            [FromQuery] string continuationToken,
            [FromQuery] int? pageSize) {
            if (Request.Headers.ContainsKey(HttpHeader.ContinuationToken)) {
                continuationToken = Request.Headers[HttpHeader.ContinuationToken]
                    .FirstOrDefault();
            }
            if (Request.Headers.ContainsKey(HttpHeader.MaxItemCount)) {
                pageSize = int.Parse(Request.Headers[HttpHeader.MaxItemCount]
                    .FirstOrDefault());
            }
            var result = await _Gateways.ListGatewaysAsync(
                continuationToken, pageSize);
            return result.ToApiModel();
        }

        /// <summary>
        /// Query Gateways
        /// </summary>
        /// <remarks>
        /// Get all Gateways that match a specified query.
        /// The returned model can contain a continuation token if more results are
        /// available.
        /// Call the GetListOfGateway operation using the token to retrieve
        /// more results.
        /// </remarks>
        /// <param name="query">Gateway query model</param>
        /// <param name="pageSize">Number of results to return</param>
        /// <returns>Gateway</returns>
        [HttpPost("query")]
        public async Task<GatewayListApiModel> QueryGatewayAsync(
            [FromBody] [Required] GatewayQueryApiModel query,
            [FromQuery] int? pageSize) {
            if (query == null) {
                throw new ArgumentNullException(nameof(query));
            }
            if (Request.Headers.ContainsKey(HttpHeader.MaxItemCount)) {
                pageSize = int.Parse(Request.Headers[HttpHeader.MaxItemCount]
                    .FirstOrDefault());
            }
            var result = await _Gateways.QueryGatewaysAsync(
                query.ToServiceModel(), pageSize);
            return result.ToApiModel();
        }

        /// <summary>
        /// Get filtered list of Gateways
        /// </summary>
        /// <remarks>
        /// Get a list of Gateways filtered using the specified query parameters.
        /// The returned model can contain a continuation token if more results are
        /// available.
        /// Call the GetListOfGateway operation using the token to retrieve
        /// more results.
        /// </remarks>
        /// <param name="query">Gateway Query model</param>
        /// <param name="pageSize">Number of results to return</param>
        /// <returns>Gateway</returns>
        [HttpGet("query")]
        public async Task<GatewayListApiModel> GetFilteredListOfGatewayAsync(
            [FromQuery] [Required] GatewayQueryApiModel query,
            [FromQuery] int? pageSize) {

            if (query == null) {
                throw new ArgumentNullException(nameof(query));
            }
            if (Request.Headers.ContainsKey(HttpHeader.MaxItemCount)) {
                pageSize = int.Parse(Request.Headers[HttpHeader.MaxItemCount]
                    .FirstOrDefault());
            }
            var result = await _Gateways.QueryGatewaysAsync(
                query.ToServiceModel(), pageSize);
            return result.ToApiModel();
        }

        /// <summary>
        /// Subscribe to Gateway registry events
        /// </summary>
        /// <remarks>
        /// Register a user to receive Gateway events through SignalR.
        /// </remarks>
        /// <param name="userId">The user id that will receive Gateway
        /// events.</param>
        /// <returns></returns>
        [HttpPut("events")]
        public async Task SubscribeAsync([FromBody]string userId) {
            await _events.SubscribeAsync("Gateways", userId);
        }

        /// <summary>
        /// Unsubscribe registry events
        /// </summary>
        /// <remarks>
        /// Unregister a user and stop it from receiving Gateway events.
        /// </remarks>
        /// <param name="userId">The user id that will not receive
        /// any more Gateway events</param>
        /// <returns></returns>
        [HttpDelete("events/{userId}")]
        public async Task UnsubscribeAsync(string userId) {
            await _events.UnsubscribeAsync("Gateways", userId);
        }

        private readonly IGatewayRegistry _Gateways;
        private readonly IGroupRegistration _events;
    }
}
