package com.younghunjungin.datebackend.repository;

import com.younghunjungin.datebackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
