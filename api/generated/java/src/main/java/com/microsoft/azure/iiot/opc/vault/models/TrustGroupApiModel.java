/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.azure.iiot.opc.vault.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Trust group model.
 */
public class TrustGroupApiModel {
    /**
     * The name of the trust group.
     */
    @JsonProperty(value = "name")
    private String name;

    /**
     * The identifer of the parent trust group.
     */
    @JsonProperty(value = "parentId")
    private String parentId;

    /**
     * Possible values include: 'ApplicationInstanceCertificate',
     * 'HttpsCertificate', 'UserCredentialCertificate'.
     */
    @JsonProperty(value = "type")
    private TrustGroupType type;

    /**
     * The subject name of the group as distinguished name.
     */
    @JsonProperty(value = "subjectName")
    private String subjectName;

    /**
     * The lifetime of the trust group certificate.
     */
    @JsonProperty(value = "lifetime")
    private String lifetime;

    /**
     * The trust group certificate key size in bits.
     */
    @JsonProperty(value = "keySize")
    private Integer keySize;

    /**
     * Possible values include: 'Rsa256', 'Rsa384', 'Rsa512', 'Rsa256Pss',
     * 'Rsa384Pss', 'Rsa512Pss'.
     */
    @JsonProperty(value = "signatureAlgorithm")
    private SignatureAlgorithm signatureAlgorithm;

    /**
     * The issued certificate lifetime in months.
     */
    @JsonProperty(value = "issuedLifetime")
    private String issuedLifetime;

    /**
     * The issued certificate key size in bits.
     */
    @JsonProperty(value = "issuedKeySize")
    private Integer issuedKeySize;

    /**
     * Possible values include: 'Rsa256', 'Rsa384', 'Rsa512', 'Rsa256Pss',
     * 'Rsa384Pss', 'Rsa512Pss'.
     */
    @JsonProperty(value = "issuedSignatureAlgorithm")
    private SignatureAlgorithm issuedSignatureAlgorithm;

    /**
     * Get the name of the trust group.
     *
     * @return the name value
     */
    public String name() {
        return this.name;
    }

    /**
     * Set the name of the trust group.
     *
     * @param name the name value to set
     * @return the TrustGroupApiModel object itself.
     */
    public TrustGroupApiModel withName(String name) {
        this.name = name;
        return this;
    }

    /**
     * Get the identifer of the parent trust group.
     *
     * @return the parentId value
     */
    public String parentId() {
        return this.parentId;
    }

    /**
     * Set the identifer of the parent trust group.
     *
     * @param parentId the parentId value to set
     * @return the TrustGroupApiModel object itself.
     */
    public TrustGroupApiModel withParentId(String parentId) {
        this.parentId = parentId;
        return this;
    }

    /**
     * Get possible values include: 'ApplicationInstanceCertificate', 'HttpsCertificate', 'UserCredentialCertificate'.
     *
     * @return the type value
     */
    public TrustGroupType type() {
        return this.type;
    }

    /**
     * Set possible values include: 'ApplicationInstanceCertificate', 'HttpsCertificate', 'UserCredentialCertificate'.
     *
     * @param type the type value to set
     * @return the TrustGroupApiModel object itself.
     */
    public TrustGroupApiModel withType(TrustGroupType type) {
        this.type = type;
        return this;
    }

    /**
     * Get the subject name of the group as distinguished name.
     *
     * @return the subjectName value
     */
    public String subjectName() {
        return this.subjectName;
    }

    /**
     * Set the subject name of the group as distinguished name.
     *
     * @param subjectName the subjectName value to set
     * @return the TrustGroupApiModel object itself.
     */
    public TrustGroupApiModel withSubjectName(String subjectName) {
        this.subjectName = subjectName;
        return this;
    }

    /**
     * Get the lifetime of the trust group certificate.
     *
     * @return the lifetime value
     */
    public String lifetime() {
        return this.lifetime;
    }

    /**
     * Set the lifetime of the trust group certificate.
     *
     * @param lifetime the lifetime value to set
     * @return the TrustGroupApiModel object itself.
     */
    public TrustGroupApiModel withLifetime(String lifetime) {
        this.lifetime = lifetime;
        return this;
    }

    /**
     * Get the trust group certificate key size in bits.
     *
     * @return the keySize value
     */
    public Integer keySize() {
        return this.keySize;
    }

    /**
     * Set the trust group certificate key size in bits.
     *
     * @param keySize the keySize value to set
     * @return the TrustGroupApiModel object itself.
     */
    public TrustGroupApiModel withKeySize(Integer keySize) {
        this.keySize = keySize;
        return this;
    }

    /**
     * Get possible values include: 'Rsa256', 'Rsa384', 'Rsa512', 'Rsa256Pss', 'Rsa384Pss', 'Rsa512Pss'.
     *
     * @return the signatureAlgorithm value
     */
    public SignatureAlgorithm signatureAlgorithm() {
        return this.signatureAlgorithm;
    }

    /**
     * Set possible values include: 'Rsa256', 'Rsa384', 'Rsa512', 'Rsa256Pss', 'Rsa384Pss', 'Rsa512Pss'.
     *
     * @param signatureAlgorithm the signatureAlgorithm value to set
     * @return the TrustGroupApiModel object itself.
     */
    public TrustGroupApiModel withSignatureAlgorithm(SignatureAlgorithm signatureAlgorithm) {
        this.signatureAlgorithm = signatureAlgorithm;
        return this;
    }

    /**
     * Get the issued certificate lifetime in months.
     *
     * @return the issuedLifetime value
     */
    public String issuedLifetime() {
        return this.issuedLifetime;
    }

    /**
     * Set the issued certificate lifetime in months.
     *
     * @param issuedLifetime the issuedLifetime value to set
     * @return the TrustGroupApiModel object itself.
     */
    public TrustGroupApiModel withIssuedLifetime(String issuedLifetime) {
        this.issuedLifetime = issuedLifetime;
        return this;
    }

    /**
     * Get the issued certificate key size in bits.
     *
     * @return the issuedKeySize value
     */
    public Integer issuedKeySize() {
        return this.issuedKeySize;
    }

    /**
     * Set the issued certificate key size in bits.
     *
     * @param issuedKeySize the issuedKeySize value to set
     * @return the TrustGroupApiModel object itself.
     */
    public TrustGroupApiModel withIssuedKeySize(Integer issuedKeySize) {
        this.issuedKeySize = issuedKeySize;
        return this;
    }

    /**
     * Get possible values include: 'Rsa256', 'Rsa384', 'Rsa512', 'Rsa256Pss', 'Rsa384Pss', 'Rsa512Pss'.
     *
     * @return the issuedSignatureAlgorithm value
     */
    public SignatureAlgorithm issuedSignatureAlgorithm() {
        return this.issuedSignatureAlgorithm;
    }

    /**
     * Set possible values include: 'Rsa256', 'Rsa384', 'Rsa512', 'Rsa256Pss', 'Rsa384Pss', 'Rsa512Pss'.
     *
     * @param issuedSignatureAlgorithm the issuedSignatureAlgorithm value to set
     * @return the TrustGroupApiModel object itself.
     */
    public TrustGroupApiModel withIssuedSignatureAlgorithm(SignatureAlgorithm issuedSignatureAlgorithm) {
        this.issuedSignatureAlgorithm = issuedSignatureAlgorithm;
        return this;
    }

}
