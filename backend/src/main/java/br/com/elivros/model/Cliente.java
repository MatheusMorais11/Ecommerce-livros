package br.com.elivros.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDate;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import jakarta.persistence.Column;

@Entity
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //Nao aceita null, "" nem somente espaços
    @NotBlank(message = "O nome é obrigatório")
    private String nome;

    @NotBlank(message = "O gênero é obrigatorio")
    private String genero;

    //Obrigatorio um valor.
    @NotNull(message = "A data de nascimento é obrigatória")
    //Impede uma data de nascimento futura ou de Hoje
    @Past(message = "A data de nascimento deve ser anterior à data atual") 
    private LocalDate dataNascimento;

   @NotBlank(message = "O CPF é obrigatório")
    @Pattern(regexp = "\\d{11}", message = "O CPF deve conter 11 números")
    @Column(unique = true)
    private String cpf;

    @NotBlank(message = "O tipo de telefone é obrigatório")
    private String tipoTelefone;

    @NotBlank(message = "O DDD é obrigatório")
    @Pattern(regexp = "\\d{2}", message = "O DDD deve conter 2 números")
    private String ddd;

    @NotBlank(message = "O número do telefone é obrigatório")
    @Pattern(regexp = "\\d{8,9}", message = "O telefone deve conter 8 ou 9 números")
    private String numeroTelefone;

    @NotBlank(message = "O e-mail é obrigatório")
    @Email(message = "Informe um e-mail válido")
    @Column(unique = true)
    private String email;

    @NotBlank(message = "A senha é obrigatória")
    @Pattern(
        regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$",
        message = "A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula e um caractere especial"
    )
    private String senha;

    private Integer ranking = 0;

    @NotNull 
    private Boolean ativo = true;
}


