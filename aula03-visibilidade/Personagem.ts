export default class Personagem{

    constructor( 
        private _nome: string, 
        private _energia: number, 
        private _vida: number,
        private _ataque: number,
        private _defesa: number
        ){}

        // Toda vez que pensar em ler dados na classe - use parametros
        // Toda vez que pensar em imprimir na classe, use retorno

        
        public get nome() : string {
            return this._nome;
        }

        
        public set nome(nome : string) {
            this._nome = nome;
        }

        
        public get energia() : number {
            return this._energia;
        }
        
        
        public set energia(energia : number) {
            this._energia = energia;
        }

        
        public get vida() : number {
            return this._vida;
        }

        
        public set vida(vida : number) {
            this._vida = vida;
        }
        
        
        public get ataque() : number {
            return this._ataque
        } 

        
        public set ataque(ataque : number) {
            this._ataque = ataque;
        }
        
        
        public get defesa() : number {
            return this._defesa;
        }
        
        
        public set defesa(defesa : number) {
            this._defesa = defesa;
        }

    public status(): string{
        return (
            "Guerreiro: \n" + 
            "\nNome: " + 
            this.nome +
            ("\nEnergia: " + this._energia.toFixed(1)) +
            ("\nAtaque: " + this._ataque.toFixed(1)) +
            ("\nDefesa: " + this._defesa.toFixed(1))
        );
        
       
    }

    public treinarAtacar(): void{
        this._ataque += this.randomizar(7);
        this._energia -= this.randomizar(10);
            if(this._defesa> 100){
                this._defesa = 0;
            }
    }

    public treinarDefesa(): void {
        this._defesa += this.randomizar(5);
        this._energia += this.randomizar(10);
         if(this._defesa > 100){
            this._defesa = 0;
            }       
    }

    public descansar(hour: number): void {
        this._energia += hour * this.randomizar(10);
        if(this._energia > 100){
            this._energia * 100;
        }
    }

    public batalhar(): number {
        let desgaste : number = this.randomizar(10);
        this._energia -= desgaste;
        return desgaste;
    }

    public isDead(): boolean {
       return this._energia < 0;
    
    }

    private randomizar(fator: number) : number {
        return Math.random() * fator;
    }

}
