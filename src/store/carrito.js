import { defineStore } from 'pinia'
import { ref,computed } from 'vue'

export const useCarritoStore = defineStore('carrito', () => {
  const items = ref([])

  const agregarItem = (item) => {
  const existe = items.value.find(i => i.id === item.id && i.tipo === item.tipo)
  if (!existe) {
    // Usa la cantidad enviada, o 1 si no viene definida
    items.value.push({ ...item, cantidad: item.cantidad || 1 })
  } else {
    // Suma la cantidad enviada
    existe.cantidad += item.cantidad || 1
  }
}

  // Calcula el total de unidades
  const totalUnidades = computed(() =>
    items.value.reduce((acc, item) => acc + (item.cantidad || 1), 0)
  )


  const eliminarItem = (id, tipo) => {
    items.value = items.value.filter(i => !(i.id === id && i.tipo === tipo))
  }

  const vaciarCarrito = () => {
    items.value = []
  }

  return {
    items,
    agregarItem,
    totalUnidades,
    eliminarItem,
    vaciarCarrito,
  }
})