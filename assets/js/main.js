import { getClubeDdSubscriptions, subscribeToClubeDd } from "./firebase/clube-dd.js";

const txtName = document.getElementById('txtName');
const txtLevel  = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
const txtEmail = document.getElementById('txtEmail')
const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
        const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    //Salvar no banco de dados!
    const subscriptionId = await subscribeToClubeDd(subscription)

    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''   
    
    alert('Inscrito com Sucesso!')
})

async function loadData() {
    const subscriptions = await getClubeDdSubscriptions()
    console.log(subscriptions)
}

loadData()