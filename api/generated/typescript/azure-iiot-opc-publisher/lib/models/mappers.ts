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


export const PublishedItemApiModel: msRest.CompositeMapper = {
  serializedName: "PublishedItemApiModel",
  type: {
    name: "Composite",
    className: "PublishedItemApiModel",
    modelProperties: {
      nodeId: {
        required: true,
        serializedName: "nodeId",
        type: {
          name: "String"
        }
      },
      publishingInterval: {
        serializedName: "publishingInterval",
        type: {
          name: "String"
        }
      },
      samplingInterval: {
        serializedName: "samplingInterval",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CredentialApiModel: msRest.CompositeMapper = {
  serializedName: "CredentialApiModel",
  type: {
    name: "Composite",
    className: "CredentialApiModel",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "None",
            "UserName",
            "X509Certificate",
            "JwtToken"
          ]
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const DiagnosticsApiModel: msRest.CompositeMapper = {
  serializedName: "DiagnosticsApiModel",
  type: {
    name: "Composite",
    className: "DiagnosticsApiModel",
    modelProperties: {
      level: {
        serializedName: "level",
        type: {
          name: "Enum",
          allowedValues: [
            "None",
            "Status",
            "Operations",
            "Diagnostics",
            "Verbose"
          ]
        }
      },
      auditId: {
        serializedName: "auditId",
        type: {
          name: "String"
        }
      },
      timeStamp: {
        serializedName: "timeStamp",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const RequestHeaderApiModel: msRest.CompositeMapper = {
  serializedName: "RequestHeaderApiModel",
  type: {
    name: "Composite",
    className: "RequestHeaderApiModel",
    modelProperties: {
      elevation: {
        serializedName: "elevation",
        type: {
          name: "Composite",
          className: "CredentialApiModel"
        }
      },
      locales: {
        serializedName: "locales",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      diagnostics: {
        serializedName: "diagnostics",
        type: {
          name: "Composite",
          className: "DiagnosticsApiModel"
        }
      }
    }
  }
};

export const PublishStartRequestApiModel: msRest.CompositeMapper = {
  serializedName: "PublishStartRequestApiModel",
  type: {
    name: "Composite",
    className: "PublishStartRequestApiModel",
    modelProperties: {
      item: {
        required: true,
        serializedName: "item",
        type: {
          name: "Composite",
          className: "PublishedItemApiModel"
        }
      },
      header: {
        serializedName: "header",
        type: {
          name: "Composite",
          className: "RequestHeaderApiModel"
        }
      }
    }
  }
};

export const ServiceResultApiModel: msRest.CompositeMapper = {
  serializedName: "ServiceResultApiModel",
  type: {
    name: "Composite",
    className: "ServiceResultApiModel",
    modelProperties: {
      statusCode: {
        serializedName: "statusCode",
        type: {
          name: "Number"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "String"
        }
      },
      diagnostics: {
        serializedName: "diagnostics",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const PublishStartResponseApiModel: msRest.CompositeMapper = {
  serializedName: "PublishStartResponseApiModel",
  type: {
    name: "Composite",
    className: "PublishStartResponseApiModel",
    modelProperties: {
      errorInfo: {
        serializedName: "errorInfo",
        type: {
          name: "Composite",
          className: "ServiceResultApiModel"
        }
      }
    }
  }
};

export const PublishStopRequestApiModel: msRest.CompositeMapper = {
  serializedName: "PublishStopRequestApiModel",
  type: {
    name: "Composite",
    className: "PublishStopRequestApiModel",
    modelProperties: {
      nodeId: {
        required: true,
        serializedName: "nodeId",
        type: {
          name: "String"
        }
      },
      header: {
        serializedName: "header",
        type: {
          name: "Composite",
          className: "RequestHeaderApiModel"
        }
      }
    }
  }
};

export const PublishStopResponseApiModel: msRest.CompositeMapper = {
  serializedName: "PublishStopResponseApiModel",
  type: {
    name: "Composite",
    className: "PublishStopResponseApiModel",
    modelProperties: {
      errorInfo: {
        serializedName: "errorInfo",
        type: {
          name: "Composite",
          className: "ServiceResultApiModel"
        }
      }
    }
  }
};

export const PublishedItemListRequestApiModel: msRest.CompositeMapper = {
  serializedName: "PublishedItemListRequestApiModel",
  type: {
    name: "Composite",
    className: "PublishedItemListRequestApiModel",
    modelProperties: {
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PublishedItemListResponseApiModel: msRest.CompositeMapper = {
  serializedName: "PublishedItemListResponseApiModel",
  type: {
    name: "Composite",
    className: "PublishedItemListResponseApiModel",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PublishedItemApiModel"
            }
          }
        }
      },
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      }
    }
  }
};
