let char = new Knight("Gabriel");
let Monster = new LittleMonster();


const stage = new Stage(

    char,
    Monster,
    document.querySelector("#char"),
    document.querySelector("#monster")
);


stage.start();