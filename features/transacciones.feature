Feature: Operaciones con transacciones

  Scenario: Calcular el total de ingresos
    Given la siguiente lista de transacciones:
      | id | description                     | amount  | type    |
      | 1  | Venta de productos al exterior  | 1500.50 | income  |
      | 2  | Compra de materia prima         | 800.25  | expense |
      | 3  | Servicio de consultoría         | 2200.00 | income  |
      | 4  | Pago de servicios públicos      | 350.75  | expense |
      | 5  | Venta de software personalizado | 5000.00 | income  |
      | 6  | Gastos de marketing digital     | 1200.30 | expense |
      | 7  | Comisión por ventas             | 450.80  | income  |
      | 8  | Mantenimiento de equipos        | 650.00  | expense |
      | 9  | Licencias de software           | 300.00  | expense |
      | 10 | Proyecto de desarrollo web      | 3200.50 | income  |
    When calculo el total de ingresos
    Then el resultado de ingresos debe ser 12351.8

  Scenario: Calcular el total de egresos
    Given la siguiente lista de transacciones:
      | id | description                     | amount  | type    |
      | 1  | Venta de productos al exterior  | 1500.50 | income  |
      | 2  | Compra de materia prima         | 800.25  | expense |
      | 3  | Servicio de consultoría         | 2200.00 | income  |
      | 4  | Pago de servicios públicos      | 350.75  | expense |
      | 5  | Venta de software personalizado | 5000.00 | income  |
      | 6  | Gastos de marketing digital     | 1200.30 | expense |
      | 7  | Comisión por ventas             | 450.80  | income  |
      | 8  | Mantenimiento de equipos        | 650.00  | expense |
      | 9  | Licencias de software           | 300.00  | expense |
      | 10 | Proyecto de desarrollo web      | 3200.50 | income  |
    When calculo el total de egresos
    Then el resultado de egresos debe ser 3301.3

  Scenario: Calcular el balance
    Given la siguiente lista de transacciones:
      | id | description                     | amount  | type    |
      | 1  | Venta de productos al exterior  | 1500.50 | income  |
      | 2  | Compra de materia prima         | 800.25  | expense |
      | 3  | Servicio de consultoría         | 2200.00 | income  |
      | 4  | Pago de servicios públicos      | 350.75  | expense |
      | 5  | Venta de software personalizado | 5000.00 | income  |
      | 6  | Gastos de marketing digital     | 1200.30 | expense |
      | 7  | Comisión por ventas             | 450.80  | income  |
      | 8  | Mantenimiento de equipos        | 650.00  | expense |
      | 9  | Licencias de software           | 300.00  | expense |
      | 10 | Proyecto de desarrollo web      | 3200.50 | income  |
    When calculo el balance
    Then el resultado del balance debe ser 9050.5

  Scenario: Calcular promedios
    Given la siguiente lista de transacciones:
      | id | description                     | amount  | type    |
      | 1  | Venta de productos al exterior  | 1500.50 | income  |
      | 2  | Compra de materia prima         | 800.25  | expense |
      | 3  | Servicio de consultoría         | 2200.00 | income  |
      | 4  | Pago de servicios públicos      | 350.75  | expense |
      | 5  | Venta de software personalizado | 5000.00 | income  |
      | 6  | Gastos de marketing digital     | 1200.30 | expense |
      | 7  | Comisión por ventas             | 450.80  | income  |
      | 8  | Mantenimiento de equipos        | 650.00  | expense |
      | 9  | Licencias de software           | 300.00  | expense |
      | 10 | Proyecto de desarrollo web      | 3200.50 | income  |
    When calculo los promedios
    Then el promedio de ingresos debe ser 2470.36
    And el promedio de egresos debe ser 660.26

  Scenario: Filtrar transacciones menores a 900
    Given la siguiente lista de transacciones:
      | id | description                     | amount  | type    |
      | 1  | Venta de productos al exterior  | 1500.50 | income  |
      | 2  | Compra de materia prima         | 800.25  | expense |
      | 3  | Servicio de consultoría         | 2200.00 | income  |
      | 4  | Pago de servicios públicos      | 350.75  | expense |
      | 5  | Venta de software personalizado | 5000.00 | income  |
      | 6  | Gastos de marketing digital     | 1200.30 | expense |
      | 7  | Comisión por ventas             | 450.80  | income  |
      | 8  | Mantenimiento de equipos        | 650.00  | expense |
      | 9  | Licencias de software           | 300.00  | expense |
      | 10 | Proyecto de desarrollo web      | 3200.50 | income  |
    When filtro las transacciones con máximo 900
    Then deben devolverse 5 transacciones