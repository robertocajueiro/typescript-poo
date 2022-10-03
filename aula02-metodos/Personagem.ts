export default class Personagem{

    constructor( 
        public nome: string, 
        public energia: number, 
        public vida: number,
        public ataque: number,
        public defesa: number
        ){}

        // Toda vez que pensar em ler dados na classe - use parametros
        // Toda vez que pensar em imprimir na classe, use retorno

    status(): string{
        return (
            "Guerreiro: \n" + 
            "\nNome: " + 
            this.nome +
            ("\nEnergia: " + this.energia.toFixed(1)) +
            ("\nAtaque: " + this.ataque.toFixed(1)) +
            ("\nDefesa: " + this.defesa.toFixed(1))
        );
        
       
    }

    treinarAtacar(): void{
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;
            if(this.defesa> 100){
                this.defesa = 0;
            }
    }

    treinarDefesa(): void {
        this.defesa += Math.random() * 5;
        this.energia += Math.random() * 10;
         if(this.defesa > 100){
            this.defesa = 0;
            }       
    }

    descansar(hour: number): void {
        this.energia += hour * (Math.random() * 10);
        if(this.energia > 100){
            this.energia * 100;
        }
    }

    batalhar(): number {
        let desgaste : number = Math.random() * 100;
        this.energia -= desgaste;
        this.energia -= Math.random() * 100;
        return this.energia;
    }

    isDead(): boolean {
        if(this.energia < 0){
            return true;
        } else {
            return false;
        }
    }

}
