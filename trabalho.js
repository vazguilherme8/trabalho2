// Recomendaçôes de filmes em uma plataforma de streaming

let resposta = "S";
const menuPrincipal = `Recomendações de filmes do Cesuca+!
    
1: Terror
2: Ficção científica
3: Drama
4: Super-heróis
5: Anime
6: Ação
    
Digite um valor correspondente para selecionar o gênero do filme: `

const menuSecundario = `
1: Até 2h
2: Mais de 2h
    
Digite um valor correspondente para a duração do filme: `

for (;resposta == "S";){
    
    let genero = parseInt(prompt(menuPrincipal))
    
    while (genero < 1 || genero > 6) {
        console.log();
        console.log("Valor inválido. Tente novamente");
        console.log()
        genero = parseInt(prompt(menuPrincipal))
    }
    
    switch (genero) {
        case 1:
            duracao = parseInt(prompt(menuSecundario))
            if (duracao == 1) {
                console.log(`
It Follows (Corrente do Mal) - 2014 - 1h40m
Halloween (Halloween: A Noite do Terror) - 1978 - 1h38m
The Witch (A Bruxa) - 2015 - 1h32m
The Blair Witch Project (A Bruxa de Blair) - 1999 - 1h18m
The Thing (O Enigma de Outro Mundo) - 1982 - 1h49m`)
                break;
            } else if (duracao == 2) {
                console.log(`
The Shining (O Iluminado) - 1980 - 2h23m
Hereditary (Hereditário) - 2018 - 2h07m
The Exorcist (O Exorcista) - 1973 - 2h02m
Weapons (A Hora do Mal) - 2025 - 2h09m
It (It: A Coisa) - 2017 - 2h15m`)
                break;
            } else {
                console.log("Valor inválido.")
                break;
            }
        case 2:
            duracao = parseInt(prompt(menuSecundario))
            if (duracao == 1) {
                console.log(`
Back to the Future (De Volta Para o Futuro) - 1985 - 1h56m
Robocop (Robocop: O Policial do Futuro) - 1987 - 1h42m
Blade Runner (Blade Runner: O Caçador de Androides) - 1982 - 1h57m
Alien (Alien: O Oitavo Passageiro) - 1979 - 1h57m
District 9 (Distrito 9) - 2009 - 1h52m`)
                break
            } else if (duracao == 2) {
                console.log(`
The Matrix (Matrix) - 1999 - 2h16m
Terminator 2: Judment Day (O Exterminador do Futuro 2: O Julgamento Final) - 1991 - 2h17m
Aliens (Aliens: O Resgate) - 1986 - 2h17m
Minority Report (Minority Report - A Nova Lei) - 2002 - 2h25m
Dune: Part Two (Duna: Parte Dois) - 2024 - 2h46m`);
                break;
            } else {
                console.log("Valor inválido.");
                break
            }
        case 3:
            duracao = parseInt(prompt(menuSecundario))
            if (duracao == 1) {
                console.log(`
Stand By Me (Conta Comigo) - 1986 - 1h29m
12 Angry men (12 Homens e Uma Sentença) - 1957 - 1h36m
The Truman Show (O Show de Truman) - 1998 - 1h43m
Moonlight (Moonlight: Sob a Luz do Luar) - 2016 - 1h51m
Lost in Translation (Encontros e Desencontros) - 2003 - 1h41m`)
                break
            } else if (duracao == 2) {
                console.log(`
Schindler's List (A Lista de Schindler) - 1993 - 3h15m
Dead Poets Society (Sociedade dos Poetas Mortos) - 1989 - 2h08m
Manchester By The Sea (Manchester à Beira-Mar) - 2016 - 2h17m
The Shawshank Redemption (Um Sonho de Liberdade) - 1994 - 2h22m
Good Will Hunting (Gênio Indomável) - 1997 - 2h06m`);
                break;
            } else {
                console.log("Valor inválido.");
                break;
            }
        case 4:
            duracao = parseInt(prompt(menuSecundario))
            if (duracao == 1) {
                console.log(`
Doctor Strange (Doutor Estranho) 2016 - 1h57m
Spider-Man: Into the Spider-Verse (Homem-Aranha: No Aranhaverso) - 2018 - 1h57m
Deadpool - 2016 - 1h48m
Batman: Mask of the Phantasm (Batman: A Máscara do Fantasma) - 1993 - 1h16m
X-Men (X-Men: O Filme) - 2000 - 1h44m`)
                break
            } else if (duracao == 2) {
                console.log(`
The Dark Knight (Batman: O Cavaleiro das Trevas) - 2008 - 2h32m
Spider-Man 2 (Homem-Aranha 2) - 2004 - 2h07m
Avengers: Infinity War (Vingadores: Guerra Infinita) - 2018 - 2h29m
The Suicide Squad (O Esquadrão Suicida) - 2021 - 2h12m
Iron Man (Homem de Ferro) - 2008 - 2h06m`);
                break;
            } else {
                console.log("Valor inválido.");
                break;
            }
        case 5:
            duracao = parseInt(prompt(menuSecundario))
            if (duracao == 1) {
                console.log(`
Howl's Moving Castle (O Castelo Animado) - 2004 - 1h59m
Grave of the Fireflies (Túmulo dos Vagalumes) - 1988 - 1h29m
My Neighbor Totoro (Meu Amigo Totoro) - 1988 - 1h26m
Kiki's Delivery Service (O Serviço de Entregas da Kik) - 1989 - 1h43m
Porco Rosso (Porco Rosso: O Último Herói Romântico) - 1992 - 1h34m`)
                break
            } else if (duracao == 2) {
                console.log(`
Akira - 1988 - 2h04m
Princess Mononoke (Princesa Mononoke) - 1997 - 2h13m
Spirited Away (A Viagem de Chihiro) - 2001 - 2h05m
The Boy and the Heron (O Menino e a Garça) - 2023 - 2h04m
The Wind Rises (Vidas ao Vento) - 2013 - 2h06m`);
                break;
            } else {
                console.log("Valor inválido.");
                break;
            }
        case 6:
            duracao = parseInt(prompt(menuSecundario))
            if (duracao == 1) {
                console.log(`
John Wick (De Volta ao Jogo) - 2014 - 1h41m
Mad Max: Fury Road (Mad Max: Estrada da Fúria) - 2015 - 2h
Léon (O Profissional) - 1994 - 1h50m
The Terminator (O Exterminador do Futuro) - 1984 - 1h47m
Mission: Impossible (Missão: Impossível) - 1996 - 1h50m`)
                break
            } else if (duracao == 2) {
                console.log(`
Heat (Fogo Contra Fogo) - 1995 - 2h50m
Die Hard (Duro de Matar) - 1988 - 2h12m
Gladiator (Gladiador) - 2000 - 2h35m
Top Gun: Maverick - 2022 - 2h10m
Casino Royale (007: Cassino Royale) - 2006 - 2h24m`);
                break;
            } else {
                console.log("Valor inválido.");
                break;
            }
    }
    console.log(); 
    resposta = prompt("Deseja buscar novamente? S/N: ").toUpperCase();
    console.log()
    
    while (resposta != "S" && resposta != "N") {
        console.log("Opção inválida. Digite apenas S ou N.");
        console.log();
        resposta = prompt("Deseja buscar novamente? S/N: ").toUpperCase()
        console.log();
    }
}
console.log();
console.log("Obrigado por utilizar nosso sistema. Tenha um ótimo filme!");