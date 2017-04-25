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
            
            
  <div class="card" style=" border:solid 1px;border-bottom-color: blue;" >
    <div class="card-content">
            <p> Require ${item.account_name}, which involves ${item.program_name}. With a budget of ${item._2017_2018_proposed_budget}</p>
    </div>
  </div>
            
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
