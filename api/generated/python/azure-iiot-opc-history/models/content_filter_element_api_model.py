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


class ContentFilterElementApiModel(Model):
    """An expression element in the filter ast.

    :param filter_operator: Possible values include: 'Equals', 'IsNull',
     'GreaterThan', 'LessThan', 'GreaterThanOrEqual', 'LessThanOrEqual',
     'Like', 'Not', 'Between', 'InList', 'And', 'Or', 'Cast', 'InView',
     'OfType', 'RelatedTo', 'BitwiseAnd', 'BitwiseOr'
    :type filter_operator: str or
     ~azure-iiot-opc-history.models.FilterOperatorType
    :param filter_operands: The operands in the element for the operator
    :type filter_operands:
     list[~azure-iiot-opc-history.models.FilterOperandApiModel]
    """

    _attribute_map = {
        'filter_operator': {'key': 'filterOperator', 'type': 'FilterOperatorType'},
        'filter_operands': {'key': 'filterOperands', 'type': '[FilterOperandApiModel]'},
    }

    def __init__(self, filter_operator=None, filter_operands=None):
        super(ContentFilterElementApiModel, self).__init__()
        self.filter_operator = filter_operator
        self.filter_operands = filter_operands