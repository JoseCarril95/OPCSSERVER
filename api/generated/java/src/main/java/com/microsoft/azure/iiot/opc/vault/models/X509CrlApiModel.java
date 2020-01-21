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
 * A X509 certificate revocation list.
 */
public class X509CrlApiModel {
    /**
     * The Issuer name of the revocation list.
     */
    @JsonProperty(value = "issuer")
    private String issuer;

    /**
     * The certificate revocation list.
     */
    @JsonProperty(value = "crl")
    private Object crl;

    /**
     * Get the Issuer name of the revocation list.
     *
     * @return the issuer value
     */
    public String issuer() {
        return this.issuer;
    }

    /**
     * Set the Issuer name of the revocation list.
     *
     * @param issuer the issuer value to set
     * @return the X509CrlApiModel object itself.
     */
    public X509CrlApiModel withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }

    /**
     * Get the certificate revocation list.
     *
     * @return the crl value
     */
    public Object crl() {
        return this.crl;
    }

    /**
     * Set the certificate revocation list.
     *
     * @param crl the crl value to set
     * @return the X509CrlApiModel object itself.
     */
    public X509CrlApiModel withCrl(Object crl) {
        this.crl = crl;
        return this;
    }

}
