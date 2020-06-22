package com.vetrecords.webapp.models;

import javax.persistence.*;
import javax.persistence.Table;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "dogs")
public class Dog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column (name = "name", nullable = false)
    private String name;

    @Column (name = "sex", nullable = false)
    private boolean sex; // 0 = female, 1 = male

    @Column (name = "fixed", nullable = false)
    private boolean fixed; // 0 = fixed, 1 = intact

    @Column (name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column (name = "zipcode", nullable = false)
    private int zipcode;

    // One Dog to many Preventions
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "dog")
    private List<Prevention> preventions;

    // One Dog to many Vaccinations
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "dog")
    private List<Vaccination> vaccinations;

    // Many Dogs to one User
    @ManyToOne
    @JoinColumn (name = "owner")
    private User owner;

    // ------------------------- Constructors
    // ------------------------- Getters and Setters
}
