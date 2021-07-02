funcs = []

for (var i = 0; i < 10; i++){
     funcs.push(function(){
         console.log(i)
     })
}
// quando 'i' "sai" desse bloco ele esa valendo 10 
funcs[2]()
funcs[8]()