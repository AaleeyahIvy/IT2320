//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/

console.log("Lab 04 startup code");//log in developer tools


function CalculateCommission()
{
var topCommission = 9040;
var topSalesPerson = "Nobody yet";
    const salesPersons = [ //array of objects
        {   
            "name": "Brad",
            "decSales" : 1500,
            "janSales" : 10000,
            "febSales" : 8000
        },
        {   
            "name": "Nila",
            "decSales" : 15000,
            "janSales" : 25000,
            "febSales" : 7500
        },
        {   
            "name": "Joseph",
            "decSales" :30000,
            "janSales" : 20000,
            "febSales" : 45000
        },
        {   
            "name": "Kesh",
            "decSales" : 12000,
            "janSales" : 14000,
            "febSales" : 10000
        },
        {   
            "name": "Lydia",
            "decSales" : 45000,
            "janSales" : 30000,
            "febSales" : 38000
        },
        {   
            "name": "Devon",
            "decSales" : 25000,
            "janSales" : 16000,
            "febSales" : 22000
        },
        {   
            "name": "Miller",
            "decSales" : 8000,
            "janSales" : 30000,
            "febSales" : 15000,
        }
    ]
    for (let i of salesPersons) {
        let totalSales = i.decSales + i.janSales + i.febSales; 
        let commissionTotal = 0;   
        if(this.totalSales > 0 && this.totalSales < 5001){
             commissionTotal += (totalSales * 0.01);
        }
            else if(totalSales > 5001 && totalSales < 10001){
                commissionTotal += (totalSales * 0.02);
            }
            else if(totalSales > 10001 && totalSales < 15001){
                commissionTotal += (totalSales * 0.03);
            }
            else if(totalSales > 15001 && totalSales < 30001){
                commissionTotal += (totalSales * 0.05);
            }
            else if(totalSales > 30001){
                commissionTotal += (totalSales * 0.08);
            }
            let avgCommission = commissionTotal / 3;  
            if(topCommission == commissionTotal){
                topSalesPerson = i.name;
            }
        console.log('Salesperson:    ' + 'Commission:     ' + 'Avg Commission:    ');
        console.log('----------------------------------------------');
        console.log(i.name + '      ' + commissionTotal + '     '+ avgCommission);
        console.log('----------------------------------------------');
    }
    console.log('The top commission was: ' + topCommission +' by ' + topSalesPerson);
}
CalculateCommission();