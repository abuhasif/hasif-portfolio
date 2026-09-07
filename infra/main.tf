resource "azurerm_resource_group" "portfolio" {
  name     = var.resource_group_name
  location = var.resource_group_location
}

resource "azurerm_static_web_app" "portfolio" {
  name                = var.static_web_app_name
  resource_group_name = azurerm_resource_group.portfolio.name
  location            = var.static_web_app_location

  sku_tier = "Free"
  sku_size = "Free"

  lifecycle {
    ignore_changes = [
      app_settings,
      repository_branch,
      repository_url
    ]
  }
}

resource "azurerm_cosmosdb_account" "portfolio" {
  name                = var.cosmos_account_name
  location            = var.cosmos_account_location
  resource_group_name = azurerm_resource_group.portfolio.name

  offer_type = "Standard"
  kind       = "GlobalDocumentDB"

  free_tier_enabled                = true
  automatic_failover_enabled       = true
  multiple_write_locations_enabled = false
  public_network_access_enabled    = true
  minimal_tls_version              = "Tls12"
  local_authentication_enabled     = true

  consistency_policy {
    consistency_level = "Session"
  }

  geo_location {
    location          = var.cosmos_account_location
    failover_priority = 0
  }

  backup {
    type                = "Periodic"
    interval_in_minutes = 240
    retention_in_hours  = 8
    storage_redundancy  = "Local"
  }

  lifecycle {
    ignore_changes = [
      tags
    ]
  }
}

resource "azurerm_cosmosdb_sql_database" "portfolio" {
  name                = var.cosmos_database_name
  resource_group_name = azurerm_resource_group.portfolio.name
  account_name        = azurerm_cosmosdb_account.portfolio.name
}

resource "azurerm_cosmosdb_sql_container" "messages" {
  name                = var.cosmos_container_name
  resource_group_name = azurerm_resource_group.portfolio.name
  account_name        = azurerm_cosmosdb_account.portfolio.name
  database_name       = azurerm_cosmosdb_sql_database.portfolio.name

  partition_key_paths   = ["/type"]
  partition_key_version = 2
  throughput            = 400

  analytical_storage_ttl = 0
  default_ttl            = 0

  indexing_policy {
    indexing_mode = "consistent"

    included_path {
      path = "/*"
    }
  }

  conflict_resolution_policy {
    mode                     = "LastWriterWins"
    conflict_resolution_path = "/_ts"
  }

  lifecycle {
    prevent_destroy = true
  }
}
