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
    /// Trust group update model
    /// </summary>
    public partial class TrustGroupUpdateRequestApiModel
    {
        /// <summary>
        /// Initializes a new instance of the TrustGroupUpdateRequestApiModel
        /// class.
        /// </summary>
        public TrustGroupUpdateRequestApiModel()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the TrustGroupUpdateRequestApiModel
        /// class.
        /// </summary>
        /// <param name="name">The name of the trust group</param>
        /// <param name="issuedLifetime">The issued certificate
        /// lifetime.</param>
        /// <param name="issuedKeySize">The issued certificate key size in
        /// bits.</param>
        /// <param name="issuedSignatureAlgorithm">Possible values include:
        /// 'Rsa256', 'Rsa384', 'Rsa512', 'Rsa256Pss', 'Rsa384Pss',
        /// 'Rsa512Pss'</param>
        public TrustGroupUpdateRequestApiModel(string name = default(string), string issuedLifetime = default(string), int? issuedKeySize = default(int?), SignatureAlgorithm? issuedSignatureAlgorithm = default(SignatureAlgorithm?))
        {
            Name = name;
            IssuedLifetime = issuedLifetime;
            IssuedKeySize = issuedKeySize;
            IssuedSignatureAlgorithm = issuedSignatureAlgorithm;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets or sets the name of the trust group
        /// </summary>
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the issued certificate lifetime.
        /// </summary>
        [JsonProperty(PropertyName = "issuedLifetime")]
        public string IssuedLifetime { get; set; }

        /// <summary>
        /// Gets or sets the issued certificate key size in bits.
        /// </summary>
        [JsonProperty(PropertyName = "issuedKeySize")]
        public int? IssuedKeySize { get; set; }

        /// <summary>
        /// Gets or sets possible values include: 'Rsa256', 'Rsa384', 'Rsa512',
        /// 'Rsa256Pss', 'Rsa384Pss', 'Rsa512Pss'
        /// </summary>
        [JsonProperty(PropertyName = "issuedSignatureAlgorithm")]
        public SignatureAlgorithm? IssuedSignatureAlgorithm { get; set; }

    }
}
