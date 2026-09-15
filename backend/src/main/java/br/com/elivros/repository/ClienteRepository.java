package br.com.elivros.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.elivros.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

    public interface ClienteRepository extends JpaRepository<Cliente, Long> {

    boolean existsByCpf(String cpf);

    boolean existsByEmail(String email);
}

}