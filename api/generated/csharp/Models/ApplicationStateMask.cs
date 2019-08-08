// <auto-generated>
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for
// license information.
//
// Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Azure.IIoT.Opc.Registry.Models
{
    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;
    using System.Runtime;
    using System.Runtime.Serialization;

    /// <summary>
    /// Defines values for ApplicationStateMask.
    /// </summary>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum ApplicationStateMask
    {
        [EnumMember(Value = "Any")]
        Any,
        [EnumMember(Value = "New")]
        New,
        [EnumMember(Value = "Approved")]
        Approved,
        [EnumMember(Value = "Rejected")]
        Rejected,
        [EnumMember(Value = "Unregistered")]
        Unregistered,
        [EnumMember(Value = "Deleted")]
        Deleted
    }
    internal static class ApplicationStateMaskEnumExtension
    {
        internal static string ToSerializedValue(this ApplicationStateMask? value)
        {
            return value == null ? null : ((ApplicationStateMask)value).ToSerializedValue();
        }

        internal static string ToSerializedValue(this ApplicationStateMask value)
        {
            switch( value )
            {
                case ApplicationStateMask.Any:
                    return "Any";
                case ApplicationStateMask.New:
                    return "New";
                case ApplicationStateMask.Approved:
                    return "Approved";
                case ApplicationStateMask.Rejected:
                    return "Rejected";
                case ApplicationStateMask.Unregistered:
                    return "Unregistered";
                case ApplicationStateMask.Deleted:
                    return "Deleted";
            }
            return null;
        }

        internal static ApplicationStateMask? ParseApplicationStateMask(this string value)
        {
            switch( value )
            {
                case "Any":
                    return ApplicationStateMask.Any;
                case "New":
                    return ApplicationStateMask.New;
                case "Approved":
                    return ApplicationStateMask.Approved;
                case "Rejected":
                    return ApplicationStateMask.Rejected;
                case "Unregistered":
                    return ApplicationStateMask.Unregistered;
                case "Deleted":
                    return ApplicationStateMask.Deleted;
            }
            return null;
        }
    }
}