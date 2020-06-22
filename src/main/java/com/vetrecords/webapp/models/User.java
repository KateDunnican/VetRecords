package com.vetrecords.webapp.models;

import javax.persistence.*;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column (name = "first_name", nullable = false)
    private String firstName;

    @Column (name = "last_name", nullable = false)
    private String lastName;

    @Column (name = "username", nullable = false)
    private String username;

    @Column(name="email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column (name = "phone_number")
    private long phoneNumber;

    @Column (name = "is_admin", nullable = false)
    private boolean is_admin;

    // One User to many Cats
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<Cat> cats;

    // One User to many Dogs
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<Dog> dogs;


    // ------------------------- Constructors
    // ------------------------- Getters and Setters

}
