<template>
  <div class="w-full min-h-screen bg-blue-50 flex items-center justify-center pt-[160px] pb-8">
    <div class="w-full max-w-6xl bg-white rounded-xl shadow p-8 flex flex-col md:flex-row gap-8">
      <!-- Galería de miniaturas -->
      <div class="hidden md:flex flex-col gap-4 items-center w-24">
        <img
          v-for="(img, idx) in item.galeria || [item.imagen]"
          :key="idx"
          :src="img"
          @click="fotoSeleccionada = img"
          :class="[
            'w-16 h-16 object-cover rounded-lg border cursor-pointer transition',
            fotoSeleccionada === img ? 'border-blue-700 ring-2 ring-blue-300' : 'border-gray-200'
          ]"
          :alt="item.nombre"
        />
      </div>
      <!-- Foto principal -->
<div class="flex-1 flex flex-col items-center justify-center min-h-[350px]">
  <img
    :src="fotoSeleccionada"
    :alt="item.nombre"
    class="w-full h-full max-h-[500px] object-contain rounded-xl shadow mb-4"
  />
  <div class="text-center text-red-500 font-semibold" v-if="item.stock && item.stock < 5">
    Últimas Unidades
  </div>
</div>
      <!-- Info y acciones -->
      <div class="flex-1 flex flex-col gap-4">
        <h1 class="text-2xl md:text-3xl font-bold text-blue-900 mb-2">{{ item.nombre }}</h1>
        <div class="mb-2">
          <span class="text-sm text-gray-500">Marca:</span>
          <span class="text-blue-700 font-semibold">{{ item.marca || 'ROYAL CANIN' }}</span>
        </div>
        <!-- Precio -->
        <div class="flex items-center gap-3 mb-1">
          <span class="text-2xl font-bold text-blue-900">${{ item.precio.toLocaleString('es-CO') }}</span>
          <span v-if="item.precioAnterior" class="text-gray-400 line-through text-lg">${{ item.precioAnterior.toLocaleString('es-CO') }}</span>
          <span v-if="item.descuento" class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">{{ item.descuento }}% OFF</span>
        </div>
        <div class="text-gray-400 text-sm mb-2">Precio incluye IVA</div>
        <div class="mb-2">
          <span class="font-bold">Cantidad:</span>
          <span class="ml-2 text-green-700 font-semibold">{{ item.stock > 0 ? 'DISPONIBLE' : 'AGOTADO' }}</span>
        </div>
        <!-- Selector de cantidad -->
        <div class="bg-gray-50 rounded-lg p-4 w-full max-w-xs">
          <label class="block font-bold mb-1">Cantidad</label>
          <div class="flex items-center gap-2">
            <button @click="cantidad = Math.max(1, cantidad-1)" class="w-8 h-8 rounded border border-gray-300 text-lg font-bold hover:bg-gray-100">-</button>
            <input type="text" v-model="cantidad" class="w-12 text-center border border-gray-300 rounded" readonly>
            <button @click="cantidad++" class="w-8 h-8 rounded border border-gray-300 text-lg font-bold hover:bg-gray-100">+</button>
          </div>
          <button
            @click="agregarAlCarrito"
            class="mt-4 bg-blue-800 hover:bg-blue-800 text-white font-bold py-3 rounded w-full flex items-center justify-center gap-2 text-base transition"
          >
            Agregar al carrito
          </button>
        </div>
        <!-- Características, tabs, etc. -->
        <div class="mt-4">
          <h2 class="font-bold mb-2">Información de producto</h2>
          <ul class="list-disc list-inside space-y-1 text-blue-900">
            <li v-for="(car, i) in item.caracteristicas" :key="i" class="text-base">{{ car }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useCarritoStore } from '../store/carrito'

const route = useRoute()
const carrito = useCarritoStore()
const cantidad = ref(1)

const productos = [
  {
    id: 2,
    nombre: 'Royal Canin - Dachshund Puppy',
    marca: 'ROYAL CANIN',
    descripcion: 'Alimento para cachorro de raza Dachshund.',
    descripcionLarga: 'Croqueta hecha a la medida, soporte al sistema inmune, razas específicas.',
    precio: 87400,
    precioAnterior: 95000,
    descuento: 8,
    categoria: 'Alimento Cachorros',
    caracteristicas: [
      'Croqueta hecha a la medida',
      'Soporte al sistema inmune',
      'Razas específicas'
    ],
    stock: 3,
    imagen: 'https://images.pexels.com/photos/452046/pexels-photo-452046.jpeg',
    galeria: [
      'https://images.pexels.com/photos/452046/pexels-photo-452046.jpeg',
      'https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg',
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg'
    ]
  }
  // ...otros productos
]

const tipo = route.params.tipo
const id = parseInt(route.params.id)

const item = computed(() => {
  if (tipo === 'producto') {
    return productos.find(p => p.id === id)
  }
  return null
})

const fotoSeleccionada = ref('')
watchEffect(() => {
  if (item.value) {
    fotoSeleccionada.value = item.value.imagen
  }
})

const agregarAlCarrito = () => {
  if (item.value) {
    carrito.agregarItem({ ...item.value, tipo, cantidad: cantidad.value })
  }
}
</script>