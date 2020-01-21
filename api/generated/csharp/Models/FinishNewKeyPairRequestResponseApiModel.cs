// <auto-generated>
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for
// license information.
//
// Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Azure.IIoT.Opc.Vault.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    /// <summary>
    /// Finish request results
    /// </summary>
    public partial class FinishNewKeyPairRequestResponseApiModel
    {
        /// <summary>
        /// Initializes a new instance of the
        /// FinishNewKeyPairRequestResponseApiModel class.
        /// </summary>
        public FinishNewKeyPairRequestResponseApiModel()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the
        /// FinishNewKeyPairRequestResponseApiModel class.
        /// </summary>
        public FinishNewKeyPairRequestResponseApiModel(CertificateRequestRecordApiModel request = default(CertificateRequestRecordApiModel), X509CertificateApiModel certificate = default(X509CertificateApiModel), PrivateKeyApiModel privateKey = default(PrivateKeyApiModel))
        {
            Request = request;
            Certificate = certificate;
            PrivateKey = privateKey;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "request")]
        public CertificateRequestRecordApiModel Request { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "certificate")]
        public X509CertificateApiModel Certificate { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "privateKey")]
        public PrivateKeyApiModel PrivateKey { get; set; }

    }
}
