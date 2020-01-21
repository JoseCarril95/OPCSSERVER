# coding=utf-8
# --------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See License.txt in the project root for
# license information.
#
# Code generated by Microsoft (R) AutoRest Code Generator 2.3.33.0
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class MethodMetadataArgumentApiModel(Model):
    """Method argument metadata model.

    :param name: Argument name
    :type name: str
    :param description: Optional description
    :type description: str
    :param type:
    :type type: ~azure-iiot-opc-twin.models.NodeApiModel
    :param default_value: Default value
    :type default_value: object
    :param value_rank: Possible values include: 'OneOrMoreDimensions',
     'OneDimension', 'TwoDimensions', 'ScalarOrOneDimension', 'Any', 'Scalar'
    :type value_rank: str or ~azure-iiot-opc-twin.models.NodeValueRank
    :param array_dimensions: Optional, array dimension
    :type array_dimensions: list[int]
    """

    _attribute_map = {
        'name': {'key': 'name', 'type': 'str'},
        'description': {'key': 'description', 'type': 'str'},
        'type': {'key': 'type', 'type': 'NodeApiModel'},
        'default_value': {'key': 'defaultValue', 'type': 'object'},
        'value_rank': {'key': 'valueRank', 'type': 'NodeValueRank'},
        'array_dimensions': {'key': 'arrayDimensions', 'type': '[int]'},
    }

    def __init__(self, name=None, description=None, type=None, default_value=None, value_rank=None, array_dimensions=None):
        super(MethodMetadataArgumentApiModel, self).__init__()
        self.name = name
        self.description = description
        self.type = type
        self.default_value = default_value
        self.value_rank = value_rank
        self.array_dimensions = array_dimensions
