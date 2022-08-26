import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'localhost:8080/api/'
axios.defaults.headers.common['Authorization'] = `bearer ${localStorage.getItem('token')}`