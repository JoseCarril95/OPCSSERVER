/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.azure.iiot.opc.registry.models;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Application registration update request.
 */
public class ApplicationRegistrationUpdateApiModel {
    /**
     * Product uri.
     */
    @JsonProperty(value = "productUri")
    private String productUri;

    /**
     * Application name.
     */
    @JsonProperty(value = "applicationName")
    private String applicationName;

    /**
     * Locale of name - defaults to "en".
     */
    @JsonProperty(value = "locale")
    private String locale;

    /**
     * Application public cert.
     */
    @JsonProperty(value = "certificate")
    private byte[] certificate;

    /**
     * Capabilities of the application.
     */
    @JsonProperty(value = "capabilities")
    private List<String> capabilities;

    /**
     * Discovery urls of the application.
     */
    @JsonProperty(value = "discoveryUrls")
    private List<String> discoveryUrls;

    /**
     * Discovery profile uri.
     */
    @JsonProperty(value = "discoveryProfileUri")
    private String discoveryProfileUri;

    /**
     * Get product uri.
     *
     * @return the productUri value
     */
    public String productUri() {
        return this.productUri;
    }

    /**
     * Set product uri.
     *
     * @param productUri the productUri value to set
     * @return the ApplicationRegistrationUpdateApiModel object itself.
     */
    public ApplicationRegistrationUpdateApiModel withProductUri(String productUri) {
        this.productUri = productUri;
        return this;
    }

    /**
     * Get application name.
     *
     * @return the applicationName value
     */
    public String applicationName() {
        return this.applicationName;
    }

    /**
     * Set application name.
     *
     * @param applicationName the applicationName value to set
     * @return the ApplicationRegistrationUpdateApiModel object itself.
     */
    public ApplicationRegistrationUpdateApiModel withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }

    /**
     * Get locale of name - defaults to "en".
     *
     * @return the locale value
     */
    public String locale() {
        return this.locale;
    }

    /**
     * Set locale of name - defaults to "en".
     *
     * @param locale the locale value to set
     * @return the ApplicationRegistrationUpdateApiModel object itself.
     */
    public ApplicationRegistrationUpdateApiModel withLocale(String locale) {
        this.locale = locale;
        return this;
    }

    /**
     * Get application public cert.
     *
     * @return the certificate value
     */
    public byte[] certificate() {
        return this.certificate;
    }

    /**
     * Set application public cert.
     *
     * @param certificate the certificate value to set
     * @return the ApplicationRegistrationUpdateApiModel object itself.
     */
    public ApplicationRegistrationUpdateApiModel withCertificate(byte[] certificate) {
        this.certificate = certificate;
        return this;
    }

    /**
     * Get capabilities of the application.
     *
     * @return the capabilities value
     */
    public List<String> capabilities() {
        return this.capabilities;
    }

    /**
     * Set capabilities of the application.
     *
     * @param capabilities the capabilities value to set
     * @return the ApplicationRegistrationUpdateApiModel object itself.
     */
    public ApplicationRegistrationUpdateApiModel withCapabilities(List<String> capabilities) {
        this.capabilities = capabilities;
        return this;
    }

    /**
     * Get discovery urls of the application.
     *
     * @return the discoveryUrls value
     */
    public List<String> discoveryUrls() {
        return this.discoveryUrls;
    }

    /**
     * Set discovery urls of the application.
     *
     * @param discoveryUrls the discoveryUrls value to set
     * @return the ApplicationRegistrationUpdateApiModel object itself.
     */
    public ApplicationRegistrationUpdateApiModel withDiscoveryUrls(List<String> discoveryUrls) {
        this.discoveryUrls = discoveryUrls;
        return this;
    }

    /**
     * Get discovery profile uri.
     *
     * @return the discoveryProfileUri value
     */
    public String discoveryProfileUri() {
        return this.discoveryProfileUri;
    }

    /**
     * Set discovery profile uri.
     *
     * @param discoveryProfileUri the discoveryProfileUri value to set
     * @return the ApplicationRegistrationUpdateApiModel object itself.
     */
    public ApplicationRegistrationUpdateApiModel withDiscoveryProfileUri(String discoveryProfileUri) {
        this.discoveryProfileUri = discoveryProfileUri;
        return this;
    }

}