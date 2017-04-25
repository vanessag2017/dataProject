function getLaDataFromAPI(){
    var endpoint = 'https://data.lacity.org/resource/n8bu-i9tg.json'
    fetch(endpoint)
    .then(function(data){
         return data.json()
    })
    .then(function(json){
        var resultDiv = document.getElementById('result')
        var finalHTML = ''
        json.forEach(function(item){
            var words = `
            <p>this is the corporation of ${item.account_name}, which involves ${item.program_name}. With as dudget of ${item._2017_2018_proposed_budget}</p>
            
            `
            finalHTML += words
        })
        resultDiv.innerHTML = finalHTML
        console.log(json)
    })
    .catch(function(error){
        console.log(error)
    })
    
}
