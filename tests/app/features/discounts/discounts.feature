Feature: Discounts
  In want list discounts

  Scenario: A list discounts
  Given I send a GET request to "/discounts?customer_id=134013976&subscriber_id=254002784"

  Then the response status code should be 200
  And the response content should be:
    """
    {
        "data" : [{
            "code": "8334412",
            "name": "Promo Paquete Movistar Play +llam",
            "status": "Abierto",
            "start_date": "2016-07-30T19:37:21",
            "end_date": "2038-01-19T00:14:07",
            "billing_id": "2059278072",
            "ap_id": "2232900000",
            "profile": {
                "customer_id": "134013976",
                "subscriber_id": "254002784"
            },
            "product": {
                "id": "5002828979",
                "component": "Plan de Internet"
            }
        }]
    }
    """