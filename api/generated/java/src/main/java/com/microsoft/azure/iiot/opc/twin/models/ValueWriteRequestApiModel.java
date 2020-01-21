/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.azure.iiot.opc.twin.models;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Value write request model.
 */
public class ValueWriteRequestApiModel {
    /**
     * Node id to to write value to.
     */
    @JsonProperty(value = "nodeId")
    private String nodeId;

    /**
     * An optional path from NodeId instance to
     * the actual node.
     */
    @JsonProperty(value = "browsePath")
    private List<String> browsePath;

    /**
     * Value to write. The system tries to convert
     * the value according to the data type value,
     * e.g. convert comma seperated value strings
     * into arrays.  (Mandatory).
     */
    @JsonProperty(value = "value", required = true)
    private Object value;

    /**
     * A built in datatype for the value. This can
     * be a data type from browse, or a built in
     * type.
     * (default: best effort).
     */
    @JsonProperty(value = "dataType")
    private String dataType;

    /**
     * Index range to write.
     */
    @JsonProperty(value = "indexRange")
    private String indexRange;

    /**
     * The headerProperty property.
     */
    @JsonProperty(value = "header")
    private RequestHeaderApiModel headerProperty;

    /**
     * Get node id to to write value to.
     *
     * @return the nodeId value
     */
    public String nodeId() {
        return this.nodeId;
    }

    /**
     * Set node id to to write value to.
     *
     * @param nodeId the nodeId value to set
     * @return the ValueWriteRequestApiModel object itself.
     */
    public ValueWriteRequestApiModel withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }

    /**
     * Get an optional path from NodeId instance to
     the actual node.
     *
     * @return the browsePath value
     */
    public List<String> browsePath() {
        return this.browsePath;
    }

    /**
     * Set an optional path from NodeId instance to
     the actual node.
     *
     * @param browsePath the browsePath value to set
     * @return the ValueWriteRequestApiModel object itself.
     */
    public ValueWriteRequestApiModel withBrowsePath(List<String> browsePath) {
        this.browsePath = browsePath;
        return this;
    }

    /**
     * Get value to write. The system tries to convert
     the value according to the data type value,
     e.g. convert comma seperated value strings
     into arrays.  (Mandatory).
     *
     * @return the value value
     */
    public Object value() {
        return this.value;
    }

    /**
     * Set value to write. The system tries to convert
     the value according to the data type value,
     e.g. convert comma seperated value strings
     into arrays.  (Mandatory).
     *
     * @param value the value value to set
     * @return the ValueWriteRequestApiModel object itself.
     */
    public ValueWriteRequestApiModel withValue(Object value) {
        this.value = value;
        return this;
    }

    /**
     * Get a built in datatype for the value. This can
     be a data type from browse, or a built in
     type.
     (default: best effort).
     *
     * @return the dataType value
     */
    public String dataType() {
        return this.dataType;
    }

    /**
     * Set a built in datatype for the value. This can
     be a data type from browse, or a built in
     type.
     (default: best effort).
     *
     * @param dataType the dataType value to set
     * @return the ValueWriteRequestApiModel object itself.
     */
    public ValueWriteRequestApiModel withDataType(String dataType) {
        this.dataType = dataType;
        return this;
    }

    /**
     * Get index range to write.
     *
     * @return the indexRange value
     */
    public String indexRange() {
        return this.indexRange;
    }

    /**
     * Set index range to write.
     *
     * @param indexRange the indexRange value to set
     * @return the ValueWriteRequestApiModel object itself.
     */
    public ValueWriteRequestApiModel withIndexRange(String indexRange) {
        this.indexRange = indexRange;
        return this;
    }

    /**
     * Get the headerProperty value.
     *
     * @return the headerProperty value
     */
    public RequestHeaderApiModel headerProperty() {
        return this.headerProperty;
    }

    /**
     * Set the headerProperty value.
     *
     * @param headerProperty the headerProperty value to set
     * @return the ValueWriteRequestApiModel object itself.
     */
    public ValueWriteRequestApiModel withHeaderProperty(RequestHeaderApiModel headerProperty) {
        this.headerProperty = headerProperty;
        return this;
    }

}
