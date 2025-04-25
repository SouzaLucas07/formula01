import fastify from "fastify";
import cors from "@fastify/cors"

const server = fastify({logger: true});

server. register(cors, {
    origin: "*",
});

const teams = [
    { id: 1, name: "Red Bull Racing", base: "Milton Keynes, Reino Unido" },
    { id: 2, name: "Mercedes-AMG Petronas", base: "Brackley, Reino Unido" },
    { id: 3, name: "Scuderia Ferrari", base: "Maranello, Itália" },
    { id: 4, name: "McLaren", base: "Woking, Reino Unido" },
    { id: 5, name: "Aston Martin Aramco", base: "Silverstone, Reino Unido" },
    { id: 6, name: "BWT Alpine", base: "Enstone, Reino Unido / Viry-Châtillon, França" },
    { id: 7, name: "Williams Racing", base: "Grove, Reino Unido" },
    { id: 8, name: "Visa Cash App RB", base: "Faenza, Itália" },
    { id: 9, name: "Stake F1 Team Kick Sauber", base: "Hinwil, Suíça" },
    { id: 10, name: "MoneyGram Haas F1 Team", base: "Kannapolis, EUA" }
  ];
  

  const drivers = [
    // Red Bull Racing
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Sergio Pérez", team: "Red Bull Racing" },
  
    // Mercedes-AMG Petronas
    { id: 3, name: "George Russell", team: "Mercedes" },
    { id: 4, name: "Andrea Kimi Antonelli", team: "Mercedes" },
  
    // Scuderia Ferrari
    { id: 5, name: "Charles Leclerc", team: "Ferrari" },
    { id: 6, name: "Lewis Hamilton", team: "Ferrari" },
  
    // McLaren
    { id: 7, name: "Lando Norris", team: "McLaren" },
    { id: 8, name: "Oscar Piastri", team: "McLaren" },
  
    // Aston Martin Aramco
    { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
    { id: 10, name: "Lance Stroll", team: "Aston Martin" },
  
    // BWT Alpine
    { id: 11, name: "Esteban Ocon", team: "Alpine" },
    { id: 12, name: "Pierre Gasly", team: "Alpine" },
  
    // Williams Racing
    { id: 13, name: "Alexander Albon", team: "Williams" },
    { id: 14, name: "Logan Sargeant", team: "Williams" },
  
    // Visa Cash App RB
    { id: 15, name: "Daniel Ricciardo", team: "RB" },
    { id: 16, name: "Yuki Tsunoda", team: "RB" },
  
    // Stake F1 Team Kick Sauber
    { id: 17, name: "Valtteri Bottas", team: "Kick Sauber" },
    { id: 18, name: "Guanyu Zhou", team: "Kick Sauber" },
  
    // MoneyGram Haas F1 Team
    { id: 19, name: "Kevin Magnussen", team: "Haas" },
    { id: 20, name: "Nico Hülkenberg", team: "Haas" }
  ];
  

server.get("/teams", async(request, response)=>{
    response.type("application/json").code(200);

    return {teams};
})

server.get("/drivers", async(request, response)=>{
    response.type("application/json").code(200);

    return {drivers};
});

interface DriverParams{
    id: string;
}

server.get<{ Params: DriverParams}>(
    "/drivers/:id", async (request, response) =>{
    const id = parseInt(request.params.id);
    const driver = drivers.find((d)=> d.id === id);

    if(!driver) {
        response.type("application/json").code(404);
        return { message: "Driver Not Found"};
    } else{
        response.type("application/json").code(200);
        return {driver};
    }
})

interface TeamsParams{
    id: string;
}

server.get<{ Params: TeamsParams}>(
    "/teams/:id", async (request, response) =>{
    const id = parseInt(request.params.id);
    const team = teams.find((t)=> t.id === id);

    if(!team) {
        response.type("application/json").code(404);
        return { message: "teams Not Found"};
    } else{
        response.type("application/json").code(200);
        return {team};
    }
})

server.listen({port:3333}, ()=>{
    console.log("Server init");
})  

