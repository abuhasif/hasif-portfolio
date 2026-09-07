output "static_web_app_default_hostname" {
  value = azurerm_static_web_app.portfolio.default_host_name
}

output "cosmos_account_name" {
  value = azurerm_cosmosdb_account.portfolio.name
}

output "cosmos_database_name" {
  value = azurerm_cosmosdb_sql_database.portfolio.name
}

output "cosmos_container_name" {
  value = azurerm_cosmosdb_sql_container.messages.name
}
