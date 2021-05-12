

export class Oferta{

    public id!: number;
    public titulo: string;
    public descripcion: string;
    public empresa: string;
    public salario: number;
    public ciudad: string;
    public email: string;

    public validarTitulo: boolean;
    public validarDescripcion: boolean;
    public validarEmpresa: boolean;
    public validarCiudad: boolean;
    public validarCorreo: boolean;
    public validarSalario: boolean;

    constructor(){
        this.titulo = '';
        this.descripcion = '';
        this.empresa = '';
        this.salario = 0;
        this.ciudad = '';
        this.email = '';

        this.validarTitulo = false;
        this.validarDescripcion = false;
        this.validarEmpresa = false;
        this.validarCiudad = false;
        this.validarCorreo = false;
        this.validarSalario = false;
    }
}
