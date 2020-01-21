/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Gateway registration model
 *
 */
class GatewayApiModel {
  /**
   * Create a GatewayApiModel.
   * @property {string} id Gateway id
   * @property {string} [siteId] Site of the Gateway
   * @property {boolean} [connected] Whether Gateway is connected on this
   * registration
   */
  constructor() {
  }

  /**
   * Defines the metadata of GatewayApiModel
   *
   * @returns {object} metadata of GatewayApiModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GatewayApiModel',
      type: {
        name: 'Composite',
        className: 'GatewayApiModel',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          siteId: {
            required: false,
            serializedName: 'siteId',
            type: {
              name: 'String'
            }
          },
          connected: {
            required: false,
            serializedName: 'connected',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = GatewayApiModel;
