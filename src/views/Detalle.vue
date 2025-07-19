<template>
  <div class="detalle-page" v-if="item">
    <h1>{{ item.nombre }}</h1>
    <p><strong>Descripción:</strong> {{ item.descripcion }}</p>
    <p><strong>Precio:</strong> ${{ item.precio }}</p>
    <button @click="agregarAlCarrito">Agregar al carrito</button>
  </div>

  <div v-else>
    <p>Ítem no encontrado.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useCarritoStore } from '../store/carrito'

const route = useRoute()
const carrito = useCarritoStore()

const productos = [
  { id: 1, nombre: 'Concentrado para perro - Adulto', descripcion: 'Saco de 10kg con nutrientes para perros adultos.', precio: 90000 },
  { id: 2, nombre: 'Vitaminas para gatos', descripcion: 'Frasco con 30 tabletas de suplemento vitamínico.', precio: 35000 },
  { id: 3, nombre: 'Antipulgas en spray', descripcion: 'Producto dermatológicamente probado, seguro para cachorros.', precio: 42000 },
]

const servicios = [
  { id: 1, nombre: 'Baño para perro', descripcion: 'Incluye shampoo especial, secado y cepillado.', precio: 25000 },
  { id: 2, nombre: 'Corte de pelo', descripcion: 'Estilo a tu gusto, con tijeras o máquina.', precio: 30000 },
  { id: 3, nombre: 'Paseo de 1 hora', descripcion: 'Paseo con cuidador certificado y agua incluida.', precio: 15000 },
]

// Obtener el item según el tipo y el ID
const tipo = route.params.tipo
const id = parseInt(route.params.id)

const item = computed(() => {
  if (tipo === 'producto') {
    return productos.find(p => p.id === id)
  } else if (tipo === 'servicio') {
    return servicios.find(s => s.id === id)
  }
  return null
})

const agregarAlCarrito = () => {
  if (item.value) {
    carrito.agregarItem({ ...item.value, tipo })
  }
}
</script>

<style scoped>
.detalle-page {
  padding: 2rem;
  background-color: #fafafa;
  border-radius: 10px;
  margin: 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

button {
  margin-top: 1rem;
  background-color: #ff9800;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #f57c00;
}
</style>
