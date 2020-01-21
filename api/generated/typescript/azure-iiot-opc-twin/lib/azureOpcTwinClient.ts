/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { AzureOpcTwinClientContext } from "./azureOpcTwinClientContext";

class AzureOpcTwinClient extends AzureOpcTwinClientContext {
  /**
   * Initializes a new instance of the AzureOpcTwinClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.AzureOpcTwinClientOptions) {
    super(credentials, options);
  }

  /**
   * Browse a node on the specified endpoint. The endpoint must be activated and connected and the
   * module client and server must trust each other.
   * @summary Browse node references
   * @param endpointId The identifier of the activated endpoint.
   * @param body The browse request
   * @param [options] The optional parameters
   * @returns Promise<Models.BrowseResponse>
   */
  browse(endpointId: string, body: Models.BrowseRequestApiModel, options?: msRest.RequestOptionsBase): Promise<Models.BrowseResponse>;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The browse request
   * @param callback The callback
   */
  browse(endpointId: string, body: Models.BrowseRequestApiModel, callback: msRest.ServiceCallback<Models.BrowseResponseApiModel>): void;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The browse request
   * @param options The optional parameters
   * @param callback The callback
   */
  browse(endpointId: string, body: Models.BrowseRequestApiModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BrowseResponseApiModel>): void;
  browse(endpointId: string, body: Models.BrowseRequestApiModel, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BrowseResponseApiModel>, callback?: msRest.ServiceCallback<Models.BrowseResponseApiModel>): Promise<Models.BrowseResponse> {
    return this.sendOperationRequest(
      {
        endpointId,
        body,
        options
      },
      browseOperationSpec,
      callback) as Promise<Models.BrowseResponse>;
  }

  /**
   * Browse the set of unique hierarchically referenced target nodes on the endpoint. The endpoint
   * must be activated and connected and the module client and server must trust each other. The root
   * node id to browse from can be provided as part of the query parameters. If it is not provided,
   * the RootFolder node is browsed. Note that this is the same as the POST method with the model
   * containing the node id and the targetNodesOnly flag set to true.
   * @summary Browse set of unique target nodes
   * @param endpointId The identifier of the activated endpoint.
   * @param [options] The optional parameters
   * @returns Promise<Models.GetSetOfUniqueNodesResponse>
   */
  getSetOfUniqueNodes(endpointId: string, options?: Models.AzureOpcTwinClientGetSetOfUniqueNodesOptionalParams): Promise<Models.GetSetOfUniqueNodesResponse>;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param callback The callback
   */
  getSetOfUniqueNodes(endpointId: string, callback: msRest.ServiceCallback<Models.BrowseResponseApiModel>): void;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param options The optional parameters
   * @param callback The callback
   */
  getSetOfUniqueNodes(endpointId: string, options: Models.AzureOpcTwinClientGetSetOfUniqueNodesOptionalParams, callback: msRest.ServiceCallback<Models.BrowseResponseApiModel>): void;
  getSetOfUniqueNodes(endpointId: string, options?: Models.AzureOpcTwinClientGetSetOfUniqueNodesOptionalParams | msRest.ServiceCallback<Models.BrowseResponseApiModel>, callback?: msRest.ServiceCallback<Models.BrowseResponseApiModel>): Promise<Models.GetSetOfUniqueNodesResponse> {
    return this.sendOperationRequest(
      {
        endpointId,
        options
      },
      getSetOfUniqueNodesOperationSpec,
      callback) as Promise<Models.GetSetOfUniqueNodesResponse>;
  }

  /**
   * Browse next set of references on the endpoint. The endpoint must be activated and connected and
   * the module client and server must trust each other.
   * @summary Browse next set of references
   * @param endpointId The identifier of the activated endpoint.
   * @param body The request body with continuation token.
   * @param [options] The optional parameters
   * @returns Promise<Models.BrowseNextResponse>
   */
  browseNext(endpointId: string, body: Models.BrowseNextRequestApiModel, options?: msRest.RequestOptionsBase): Promise<Models.BrowseNextResponse>;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The request body with continuation token.
   * @param callback The callback
   */
  browseNext(endpointId: string, body: Models.BrowseNextRequestApiModel, callback: msRest.ServiceCallback<Models.BrowseNextResponseApiModel>): void;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The request body with continuation token.
   * @param options The optional parameters
   * @param callback The callback
   */
  browseNext(endpointId: string, body: Models.BrowseNextRequestApiModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BrowseNextResponseApiModel>): void;
  browseNext(endpointId: string, body: Models.BrowseNextRequestApiModel, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BrowseNextResponseApiModel>, callback?: msRest.ServiceCallback<Models.BrowseNextResponseApiModel>): Promise<Models.BrowseNextResponse> {
    return this.sendOperationRequest(
      {
        endpointId,
        body,
        options
      },
      browseNextOperationSpec,
      callback) as Promise<Models.BrowseNextResponse>;
  }

  /**
   * Browse the next set of unique hierarchically referenced target nodes on the endpoint. The
   * endpoint must be activated and connected and the module client and server must trust each other.
   * Note that this is the same as the POST method with the model containing the continuation token
   * and the targetNodesOnly flag set to true.
   * @summary Browse next set of unique target nodes
   * @param endpointId The identifier of the activated endpoint.
   * @param continuationToken Continuation token from GetSetOfUniqueNodes operation
   * @param [options] The optional parameters
   * @returns Promise<Models.GetNextSetOfUniqueNodesResponse>
   */
  getNextSetOfUniqueNodes(endpointId: string, continuationToken: string, options?: msRest.RequestOptionsBase): Promise<Models.GetNextSetOfUniqueNodesResponse>;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param continuationToken Continuation token from GetSetOfUniqueNodes operation
   * @param callback The callback
   */
  getNextSetOfUniqueNodes(endpointId: string, continuationToken: string, callback: msRest.ServiceCallback<Models.BrowseNextResponseApiModel>): void;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param continuationToken Continuation token from GetSetOfUniqueNodes operation
   * @param options The optional parameters
   * @param callback The callback
   */
  getNextSetOfUniqueNodes(endpointId: string, continuationToken: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BrowseNextResponseApiModel>): void;
  getNextSetOfUniqueNodes(endpointId: string, continuationToken: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BrowseNextResponseApiModel>, callback?: msRest.ServiceCallback<Models.BrowseNextResponseApiModel>): Promise<Models.GetNextSetOfUniqueNodesResponse> {
    return this.sendOperationRequest(
      {
        endpointId,
        continuationToken,
        options
      },
      getNextSetOfUniqueNodesOperationSpec,
      callback) as Promise<Models.GetNextSetOfUniqueNodesResponse>;
  }

  /**
   * Browse using a path from the specified node id. This call uses TranslateBrowsePathsToNodeIds
   * service under the hood. The endpoint must be activated and connected and the module client and
   * server must trust each other.
   * @summary Browse using a browse path
   * @param endpointId The identifier of the activated endpoint.
   * @param body The browse path request
   * @param [options] The optional parameters
   * @returns Promise<Models.BrowseUsingPathResponse>
   */
  browseUsingPath(endpointId: string, body: Models.BrowsePathRequestApiModel, options?: msRest.RequestOptionsBase): Promise<Models.BrowseUsingPathResponse>;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The browse path request
   * @param callback The callback
   */
  browseUsingPath(endpointId: string, body: Models.BrowsePathRequestApiModel, callback: msRest.ServiceCallback<Models.BrowsePathResponseApiModel>): void;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The browse path request
   * @param options The optional parameters
   * @param callback The callback
   */
  browseUsingPath(endpointId: string, body: Models.BrowsePathRequestApiModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BrowsePathResponseApiModel>): void;
  browseUsingPath(endpointId: string, body: Models.BrowsePathRequestApiModel, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BrowsePathResponseApiModel>, callback?: msRest.ServiceCallback<Models.BrowsePathResponseApiModel>): Promise<Models.BrowseUsingPathResponse> {
    return this.sendOperationRequest(
      {
        endpointId,
        body,
        options
      },
      browseUsingPathOperationSpec,
      callback) as Promise<Models.BrowseUsingPathResponse>;
  }

  /**
   * Return method meta data to support a user interface displaying forms to input and output
   * arguments. The endpoint must be activated and connected and the module client and server must
   * trust each other.
   * @summary Get method meta data
   * @param endpointId The identifier of the activated endpoint.
   * @param body The method metadata request
   * @param [options] The optional parameters
   * @returns Promise<Models.GetCallMetadataResponse>
   */
  getCallMetadata(endpointId: string, body: Models.MethodMetadataRequestApiModel, options?: msRest.RequestOptionsBase): Promise<Models.GetCallMetadataResponse>;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The method metadata request
   * @param callback The callback
   */
  getCallMetadata(endpointId: string, body: Models.MethodMetadataRequestApiModel, callback: msRest.ServiceCallback<Models.MethodMetadataResponseApiModel>): void;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The method metadata request
   * @param options The optional parameters
   * @param callback The callback
   */
  getCallMetadata(endpointId: string, body: Models.MethodMetadataRequestApiModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MethodMetadataResponseApiModel>): void;
  getCallMetadata(endpointId: string, body: Models.MethodMetadataRequestApiModel, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MethodMetadataResponseApiModel>, callback?: msRest.ServiceCallback<Models.MethodMetadataResponseApiModel>): Promise<Models.GetCallMetadataResponse> {
    return this.sendOperationRequest(
      {
        endpointId,
        body,
        options
      },
      getCallMetadataOperationSpec,
      callback) as Promise<Models.GetCallMetadataResponse>;
  }

  /**
   * Invoke method node with specified input arguments. The endpoint must be activated and connected
   * and the module client and server must trust each other.
   * @summary Call a method
   * @param endpointId The identifier of the activated endpoint.
   * @param body The method call request
   * @param [options] The optional parameters
   * @returns Promise<Models.CallMethodResponse>
   */
  callMethod(endpointId: string, body: Models.MethodCallRequestApiModel, options?: msRest.RequestOptionsBase): Promise<Models.CallMethodResponse>;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The method call request
   * @param callback The callback
   */
  callMethod(endpointId: string, body: Models.MethodCallRequestApiModel, callback: msRest.ServiceCallback<Models.MethodCallResponseApiModel>): void;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The method call request
   * @param options The optional parameters
   * @param callback The callback
   */
  callMethod(endpointId: string, body: Models.MethodCallRequestApiModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MethodCallResponseApiModel>): void;
  callMethod(endpointId: string, body: Models.MethodCallRequestApiModel, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MethodCallResponseApiModel>, callback?: msRest.ServiceCallback<Models.MethodCallResponseApiModel>): Promise<Models.CallMethodResponse> {
    return this.sendOperationRequest(
      {
        endpointId,
        body,
        options
      },
      callMethodOperationSpec,
      callback) as Promise<Models.CallMethodResponse>;
  }

  /**
   * Read a variable node's value. The endpoint must be activated and connected and the module client
   * and server must trust each other.
   * @summary Read variable value
   * @param endpointId The identifier of the activated endpoint.
   * @param body The read value request
   * @param [options] The optional parameters
   * @returns Promise<Models.ReadValueResponse>
   */
  readValue(endpointId: string, body: Models.ValueReadRequestApiModel, options?: msRest.RequestOptionsBase): Promise<Models.ReadValueResponse>;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The read value request
   * @param callback The callback
   */
  readValue(endpointId: string, body: Models.ValueReadRequestApiModel, callback: msRest.ServiceCallback<Models.ValueReadResponseApiModel>): void;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The read value request
   * @param options The optional parameters
   * @param callback The callback
   */
  readValue(endpointId: string, body: Models.ValueReadRequestApiModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ValueReadResponseApiModel>): void;
  readValue(endpointId: string, body: Models.ValueReadRequestApiModel, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ValueReadResponseApiModel>, callback?: msRest.ServiceCallback<Models.ValueReadResponseApiModel>): Promise<Models.ReadValueResponse> {
    return this.sendOperationRequest(
      {
        endpointId,
        body,
        options
      },
      readValueOperationSpec,
      callback) as Promise<Models.ReadValueResponse>;
  }

  /**
   * Get a variable node's value using its node id. The endpoint must be activated and connected and
   * the module client and server must trust each other.
   * @summary Get variable value
   * @param endpointId The identifier of the activated endpoint.
   * @param nodeId The node to read
   * @param [options] The optional parameters
   * @returns Promise<Models.GetValueResponse>
   */
  getValue(endpointId: string, nodeId: string, options?: msRest.RequestOptionsBase): Promise<Models.GetValueResponse>;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param nodeId The node to read
   * @param callback The callback
   */
  getValue(endpointId: string, nodeId: string, callback: msRest.ServiceCallback<Models.ValueReadResponseApiModel>): void;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param nodeId The node to read
   * @param options The optional parameters
   * @param callback The callback
   */
  getValue(endpointId: string, nodeId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ValueReadResponseApiModel>): void;
  getValue(endpointId: string, nodeId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ValueReadResponseApiModel>, callback?: msRest.ServiceCallback<Models.ValueReadResponseApiModel>): Promise<Models.GetValueResponse> {
    return this.sendOperationRequest(
      {
        endpointId,
        nodeId,
        options
      },
      getValueOperationSpec,
      callback) as Promise<Models.GetValueResponse>;
  }

  /**
   * Read attributes of a node. The endpoint must be activated and connected and the module client
   * and server must trust each other.
   * @summary Read node attributes
   * @param endpointId The identifier of the activated endpoint.
   * @param body The read request
   * @param [options] The optional parameters
   * @returns Promise<Models.ReadAttributesResponse>
   */
  readAttributes(endpointId: string, body: Models.ReadRequestApiModel, options?: msRest.RequestOptionsBase): Promise<Models.ReadAttributesResponse>;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The read request
   * @param callback The callback
   */
  readAttributes(endpointId: string, body: Models.ReadRequestApiModel, callback: msRest.ServiceCallback<Models.ReadResponseApiModel>): void;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The read request
   * @param options The optional parameters
   * @param callback The callback
   */
  readAttributes(endpointId: string, body: Models.ReadRequestApiModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ReadResponseApiModel>): void;
  readAttributes(endpointId: string, body: Models.ReadRequestApiModel, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ReadResponseApiModel>, callback?: msRest.ServiceCallback<Models.ReadResponseApiModel>): Promise<Models.ReadAttributesResponse> {
    return this.sendOperationRequest(
      {
        endpointId,
        body,
        options
      },
      readAttributesOperationSpec,
      callback) as Promise<Models.ReadAttributesResponse>;
  }

  /**
   * Write variable node's value. The endpoint must be activated and connected and the module client
   * and server must trust each other.
   * @summary Write variable value
   * @param endpointId The identifier of the activated endpoint.
   * @param body The write value request
   * @param [options] The optional parameters
   * @returns Promise<Models.WriteValueResponse>
   */
  writeValue(endpointId: string, body: Models.ValueWriteRequestApiModel, options?: msRest.RequestOptionsBase): Promise<Models.WriteValueResponse>;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The write value request
   * @param callback The callback
   */
  writeValue(endpointId: string, body: Models.ValueWriteRequestApiModel, callback: msRest.ServiceCallback<Models.ValueWriteResponseApiModel>): void;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The write value request
   * @param options The optional parameters
   * @param callback The callback
   */
  writeValue(endpointId: string, body: Models.ValueWriteRequestApiModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ValueWriteResponseApiModel>): void;
  writeValue(endpointId: string, body: Models.ValueWriteRequestApiModel, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ValueWriteResponseApiModel>, callback?: msRest.ServiceCallback<Models.ValueWriteResponseApiModel>): Promise<Models.WriteValueResponse> {
    return this.sendOperationRequest(
      {
        endpointId,
        body,
        options
      },
      writeValueOperationSpec,
      callback) as Promise<Models.WriteValueResponse>;
  }

  /**
   * Write any attribute of a node. The endpoint must be activated and connected and the module
   * client and server must trust each other.
   * @summary Write node attributes
   * @param endpointId The identifier of the activated endpoint.
   * @param body The batch write request
   * @param [options] The optional parameters
   * @returns Promise<Models.WriteAttributesResponse>
   */
  writeAttributes(endpointId: string, body: Models.WriteRequestApiModel, options?: msRest.RequestOptionsBase): Promise<Models.WriteAttributesResponse>;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The batch write request
   * @param callback The callback
   */
  writeAttributes(endpointId: string, body: Models.WriteRequestApiModel, callback: msRest.ServiceCallback<Models.WriteResponseApiModel>): void;
  /**
   * @param endpointId The identifier of the activated endpoint.
   * @param body The batch write request
   * @param options The optional parameters
   * @param callback The callback
   */
  writeAttributes(endpointId: string, body: Models.WriteRequestApiModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WriteResponseApiModel>): void;
  writeAttributes(endpointId: string, body: Models.WriteRequestApiModel, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WriteResponseApiModel>, callback?: msRest.ServiceCallback<Models.WriteResponseApiModel>): Promise<Models.WriteAttributesResponse> {
    return this.sendOperationRequest(
      {
        endpointId,
        body,
        options
      },
      writeAttributesOperationSpec,
      callback) as Promise<Models.WriteAttributesResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const browseOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/browse/{endpointId}",
  urlParameters: [
    Parameters.endpointId
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.BrowseRequestApiModel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BrowseResponseApiModel
    },
    default: {}
  },
  serializer
};

const getSetOfUniqueNodesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/browse/{endpointId}",
  urlParameters: [
    Parameters.endpointId
  ],
  queryParameters: [
    Parameters.nodeId0
  ],
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: Mappers.BrowseResponseApiModel
    },
    default: {}
  },
  serializer
};

const browseNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/browse/{endpointId}/next",
  urlParameters: [
    Parameters.endpointId
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.BrowseNextRequestApiModel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BrowseNextResponseApiModel
    },
    default: {}
  },
  serializer
};

const getNextSetOfUniqueNodesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/browse/{endpointId}/next",
  urlParameters: [
    Parameters.endpointId
  ],
  queryParameters: [
    Parameters.continuationToken
  ],
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: Mappers.BrowseNextResponseApiModel
    },
    default: {}
  },
  serializer
};

const browseUsingPathOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/browse/{endpointId}/path",
  urlParameters: [
    Parameters.endpointId
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.BrowsePathRequestApiModel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BrowsePathResponseApiModel
    },
    default: {}
  },
  serializer
};

const getCallMetadataOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/call/{endpointId}/metadata",
  urlParameters: [
    Parameters.endpointId
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.MethodMetadataRequestApiModel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MethodMetadataResponseApiModel
    },
    default: {}
  },
  serializer
};

const callMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/call/{endpointId}",
  urlParameters: [
    Parameters.endpointId
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.MethodCallRequestApiModel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MethodCallResponseApiModel
    },
    default: {}
  },
  serializer
};

const readValueOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/read/{endpointId}",
  urlParameters: [
    Parameters.endpointId
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.ValueReadRequestApiModel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ValueReadResponseApiModel
    },
    default: {}
  },
  serializer
};

const getValueOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v2/read/{endpointId}",
  urlParameters: [
    Parameters.endpointId
  ],
  queryParameters: [
    Parameters.nodeId1
  ],
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {
      bodyMapper: Mappers.ValueReadResponseApiModel
    },
    default: {}
  },
  serializer
};

const readAttributesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/read/{endpointId}/attributes",
  urlParameters: [
    Parameters.endpointId
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.ReadRequestApiModel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ReadResponseApiModel
    },
    default: {}
  },
  serializer
};

const writeValueOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/write/{endpointId}",
  urlParameters: [
    Parameters.endpointId
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.ValueWriteRequestApiModel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ValueWriteResponseApiModel
    },
    default: {}
  },
  serializer
};

const writeAttributesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v2/write/{endpointId}/attributes",
  urlParameters: [
    Parameters.endpointId
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.WriteRequestApiModel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WriteResponseApiModel
    },
    default: {}
  },
  serializer
};

export {
  AzureOpcTwinClient,
  AzureOpcTwinClientContext,
  Models as AzureOpcTwinModels,
  Mappers as AzureOpcTwinMappers
};
