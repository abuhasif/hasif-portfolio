variable "subscription_id" {
  description = "Azure subscription ID"
  type        = string
}

variable "resource_group_name" {
  type    = string
  default = "hasif-portfolio"
}

variable "resource_group_location" {
  type    = string
  default = "eastasia"
}

variable "static_web_app_name" {
  type    = string
  default = "hasif-portfolio"
}

variable "static_web_app_location" {
  type    = string
  default = "East Asia"
}

variable "cosmos_account_name" {
  type    = string
  default = "hasif-portfolio-cosmos"
}

variable "cosmos_account_location" {
  type    = string
  default = "Southeast Asia"
}

variable "cosmos_database_name" {
  type    = string
  default = "portfolio-db"
}

variable "cosmos_container_name" {
  type    = string
  default = "messages"
}
