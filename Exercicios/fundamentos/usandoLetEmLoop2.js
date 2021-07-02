funcs = []

for (let i = 0; i < 10; i++){
     funcs.push(function(){
         console.log(i)
     })
}
// agora com o 'let' ele lembra oque ocorre dentro do 'for'
funcs[2]()
funcs[8]()