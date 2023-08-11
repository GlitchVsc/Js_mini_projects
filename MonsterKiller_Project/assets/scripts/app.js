//ATTACKS
const ATTACK_VALUE = 10;
const  MONSTER_ATTACK = 14;
const STRONG_ATTACK_VALUE = 17;

const HEAL_VALUE = 20;

const modeAttack = 'ATTACK'
const modeStrongAttack = 'STRONG_ATTACK'

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK'
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK'
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'STRONG_ATTACK'
const LOG_EVENT_HEAL_PLAYER = 'HEAL_PLAYER'
const LOG_EVEN_GAME_OVER = 'GAME OVER'


let hasBonusLife = true ;

let battleLog = [];


/* Validating User input */
const startLife =  prompt('Choose Max life' , '100')
let choosenMaxLife = parseInt(startLife) ; 

if( isNaN(choosenMaxLife) || choosenMaxLife <=0){
    choosenMaxLife = 100;
}
/*                                             */

let currentPlayerHealth = choosenMaxLife ;
let currentMonsterHealth = choosenMaxLife;
adjustHealthBars(choosenMaxLife)

function reset(){
     currentPlayerHealth = choosenMaxLife ;
     currentMonsterHealth = choosenMaxLife;
     resetGame(choosenMaxLife)
    // appendBonusLife()
}

/* FUNCTION FOR BATTLE LOG*/
function writeToLog(ev , val , monsterHealth , playerHealth){
    let logEntry ={
        event : ev,
        value : val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    }
    if(ev === LOG_EVENT_PLAYER_ATTACK){
        logEntry.target = 'MONSTER' 
    }else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK){
        logEntry = {
            event : ev,
            value : val,
            target : 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    }else if(ev === LOG_EVENT_MONSTER_ATTACK){
        logEntry = {
            event : ev,
            value : val,
            target : 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    }else if(ev === LOG_EVENT_HEAL_PLAYER){
        logEntry = {
            event : ev,
            value : val,
            target : 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    }else if(ev === LOG_EVEN_GAME_OVER){
        logEntry = {
            event : ev,
            value : val,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    }
    battleLog.push(logEntry);
}




/*One function when the monster attacks and checks WIN or DRAW condition */
function endRound(){
    const initialPlayerHealth = currentPlayerHealth

    const playerDamage= dealPlayerDamage(MONSTER_ATTACK);
    currentPlayerHealth -= playerDamage
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK,
        playerDamage,
        currentMonsterHealth,
        currentPlayerHealth
        );


    /*First try to implement appentchild the bonus life */
    // if(currentMonsterHealth <= 0 || currentMonsterHealth <= 0 && hasBonusLife){
    //     removeBonusLife()
    //     appendBonusLife()
    //     currentPlayerHealth = initialPlayerHealth
    //     // alert("RESET PLZZ WITHBONUS LIFE ON ")
    //     setPlayerHealth(initialPlayerHealth)
    // }
    
    
     /* Bonus Life Functionality */
     if (currentPlayerHealth <= 0 && hasBonusLife){
         hasBonusLife = false
         removeBonusLife()
         currentPlayerHealth = initialPlayerHealth
         alert("Bonus Lifeeeeeeeee")
         setPlayerHealth(initialPlayerHealth)
     }
     /*                                            */



     if(currentMonsterHealth <= 0 && currentPlayerHealth > 0 ){
         alert('Youwin')
         writeToLog(
            LOG_EVEN_GAME_OVER,
            'PLAYER WON',
            currentMonsterHealth,
            currentPlayerHealth
            );
     }else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0 ){
         alert('younoob')
         writeToLog(
            LOG_EVEN_GAME_OVER,
            'MONSTER WON',
            currentMonsterHealth,
            currentPlayerHealth
            );
     }else if( currentMonsterHealth <= 0 && currentPlayerHealth <= 0 ){
         alert('DRAWWWWWWWWWWW')
         writeToLog(
            LOG_EVEN_GAME_OVER,
            'A DRAW',
            currentMonsterHealth,
            currentPlayerHealth
            );
     }

     if(currentPlayerHealth <= 0 || currentMonsterHealth <= 0){
         reset()
         
     }
}

function attackAllHandler(dmgOperator){
    
            /*TURNARY OPERATOR CASE  */
    const maxDamage = 
        dmgOperator === modeAttack 
            ? ATTACK_VALUE 
            : STRONG_ATTACK_VALUE;
    
            const logEvent = 
        dmgOperator ===  modeAttack 
            ? LOG_EVENT_PLAYER_ATTACK 
            : LOG_EVENT_PLAYER_STRONG_ATTACK;
    
            /*WITH IF STATEMENT */
    // if (dmgOperator === modeAttack ){
    //     maxDamage = ATTACK_VALUE
    //      logEvent = LOG_EVENT_PLAYER_ATTACK
    // }else if(dmgOperator === modeStrongAttack){
    //     maxDamage = STRONG_ATTACK_VALUE
    //      logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK
    // }

    const damage = dealMonsterDamage(maxDamage)
    currentMonsterHealth -= damage;
    writeToLog(
        logEvent,
        damage ,
        currentMonsterHealth,
        currentPlayerHealth
    )

    endRound();
}


function attackHandler(){
    attackAllHandler(modeAttack) 
}
function stongAttackHandler(){
    attackAllHandler(modeStrongAttack)
}

/* Heal Functionality */
function healHandler(){
    let heal_value;
    if( currentPlayerHealth >= choosenMaxLife - HEAL_VALUE){
        alert("You cant Heal more than your max life")
        heal_value = choosenMaxLife - currentPlayerHealth
    }else{
        heal_value = HEAL_VALUE
    }
    increasePlayerHealth(heal_value)
    currentPlayerHealth += heal_value
    writeToLog(
        LOG_EVENT_HEAL_PLAYER,
        heal_value,
        currentMonsterHealth,
        currentPlayerHealth
    )
    endRound();
}

function printLogHandler(){
    console.log(battleLog)
}
healBtn.addEventListener('click' , healHandler)
strongAttackBtn.addEventListener('click', stongAttackHandler)
logBtn.addEventListener('click' , printLogHandler)
attackBtn.addEventListener('click',  attackHandler)


