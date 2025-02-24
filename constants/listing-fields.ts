import { FieldType } from "@/@types/index.type";
import {
  CAR_BRAND_OPTIONS,
  CAR_TRANSMISSION_OPTIONS,
  CAR_CONDITION_OPTIONS,
  CAR_COLOR_OPTIONS,
  CAR_YEAR_OPTIONS,
  CAR_MODEL_OPTIONS,
  CAR_FUELTYPE_OPTIONS,
  CAR_BODY_TYPE_OPTIONS,
  CAR_SECOND_CONDITION_OPTIONS,
  CAR_KEY_FEATURES_OPTIONS,
  CAR_DRIVETRAIN_OPTIONS,
} from "./car-options";
export const addListingFields: FieldType[] = [
  {
    name: "brand",
    fieldType: "select",
    label: "Brand (Make)",
    required: true,
    disabled: false,
    options: CAR_BRAND_OPTIONS,
  },
  {
    name: "model",
    fieldType: "select",
    label: "Model",
    required: true,
    disabled: false,
    options: CAR_MODEL_OPTIONS,
  },
  {
    name: "yearOfManufacture",
    fieldType: "select",
    label: "Year of Manufacture",
    required: true,
    disabled: false,
    options: CAR_YEAR_OPTIONS,
  },
  {
    name: "exteriorColor",
    fieldType: "select",
    label: "Exterior Color",
    required: true,
    disabled: false,
    options: CAR_COLOR_OPTIONS,
  },
  {
    name: "interiorColor",
    fieldType: "select",
    label: "Interior Color",
    required: false,
    disabled: false,
    options: CAR_COLOR_OPTIONS,
  },
  {
    name: "condition",
    fieldType: "select",
    label: "Condition",
    required: true,
    disabled: false,
    options: CAR_CONDITION_OPTIONS,
  },
  {
    name: "secondCondition",
    fieldType: "multiselect",
    label: "Second Condition (Optional)",
    required: false,
    disabled: false,
    options: CAR_SECOND_CONDITION_OPTIONS,
  },
  {
    name: "mileage",
    fieldType: "number",
    label: "Mileage",
    required: false,
    disabled: false,
  },
  {
    name: "transmission",
    fieldType: "select",
    label: "Transmission",
    required: true,
    disabled: false,
    options: CAR_TRANSMISSION_OPTIONS,
  },
  {
    name: "fuelType",
    fieldType: "select",
    label: "Fuel Type",
    required: true,
    disabled: false,
    options: CAR_FUELTYPE_OPTIONS,
  },
  {
    name: "keyFeatures",
    fieldType: "multiselect",
    label: "Key Features (Optional)",
    required: false,
    disabled: false,
    options: CAR_KEY_FEATURES_OPTIONS,
  },

  {
    name: "vin",
    fieldType: "text",
    label: "VIN Chassis Number",
    required: false,
  },
  {
    name: "bodyType",
    fieldType: "select",
    label: "Body Type",
    required: false,
    disabled: false,
    options: CAR_BODY_TYPE_OPTIONS,
  },

  {
    name: "drivetrain",
    fieldType: "select",
    label: "Drivetrain",
    required: true,
    disabled: false,
    options: CAR_DRIVETRAIN_OPTIONS,
  },
  {
    name: "seatingCapacity",
    fieldType: "number",
    label: "Seating Capacity",
    required: false,
    disabled: false,
  },
  {
    name: "description",
    fieldType: "textarea",
    label: "Description",
    col: 2,
    required: false,
    disabled: false,
  },
  {
    name: "price",
    fieldType: "currency",
    label: "Price",
    col: 1,
    required: true,
    disabled: false,
  },
  {
    name: "contactPhone",
    fieldType: "phone",
    label: "Contact Phone Number",
    required: true,
    disabled: false,
  },
];