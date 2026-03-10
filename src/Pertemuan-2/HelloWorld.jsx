export default function HelloWorld(){
    const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }

    return (
        <div>
            <h1>Hello World</h1>
            <img src="./img/bunga.png" width="100%"/>
            <p>Selamat Belajar ReactJs</p>

            <GreetingBinjai/>
            <QuoteText/>
             <UserCard 
	            nama="rania" 
	            nim="2457301151"
	            tanggal="2026/03/10"
	          />
              <UserCard 
	            nama="bianca" 
	            nim="2457301101"
	            tanggal="2026/03/10"
	          />
              <UserCard {...propsUserCard}/>       
        </div>
    )
}

function GreetingBinjai(){
    return(
        <small className="card">Salam Dari Binjai!!</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}