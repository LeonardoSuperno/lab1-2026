"use strict"

import dayjs from "dayjs"

function Film(id, title, favorite=false, watch_date=null, rating=null, user_id=1) {
    this.id = id
    this.title = title
    this.favorite = favorite
    this.watch_date = dayjs(watch_date)
    this.rating = rating
    this.user_id = user_id
}

function FilmLibrary() {
    this.array = []

    this.add_film = (film) => {
        this.array.push(film);
    }

    this.sort_by_ascending_watch_date = () => {
        this.array.sort((a, b) => {
            if (!a.watch_date) return 1 // a is null -> mettilo al fondo
            if (!b.watch_date) return -1 // b è null -> fai scendere b
            return a.watch_date.diff(b.watch_date)
        })
    }

    this.sort_by_descending_rating = () => {
        this.array.sort( (a,b) => {
            if(!a.rating) return 1 // se ranting è null mando al fondo
            if(!b.rating) return -1
            return b.rating - a.rating
        })
    }

    this.remove_film = (id) => {
        this.array = this.array.filter((film) => (film.id != id))
    }
    

    this.print_films = () => {
        this.array.forEach( (film) => (console.log(film)))
    }

    this.update_rate = (id, new_rating) => {
    const film = this.array.find(f => f.id === id);
    if (film) {
        film.rating = new_rating;
    }
}
}

const film0 = new Film(0, "Quo", false)
const film1 = new Film(1, "Cado", true, "2026-03-06", 3)
const film2 = new Film(2, "Sole", true, "2025-01-01", 5)

const Checco = new FilmLibrary()
Checco.add_film(film1)
Checco.add_film(film2)
Checco.add_film(film0)

//Checco.sort_by_ascending_watch_date()
Checco.sort_by_descending_rating()

Checco.remove_film(1)
Checco.update_rate(2, 1)

Checco.print_films()