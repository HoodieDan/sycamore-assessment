<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits(['update:modelValue'])

const editor = ref<Editor | null>(null)

onMounted(() => {
  editor.value = new Editor({
    content: props.modelValue,
    extensions: [StarterKit, Underline],
    onUpdate: ({ editor }) => {
      emit('update:modelValue', editor.getHTML())
    },
  })
})

onBeforeUnmount(() => {
  editor.value?.destroy()
})

function isActive(format: string, options = {}) {
  return editor.value?.isActive(format, options)
}

function toggleBold() {
  editor.value?.commands.toggleBold()
}

function toggleItalic() {
  editor.value?.commands.toggleItalic()
}

function toggleUnderline() {
  // TipTap StarterKit does not include underline by default.
  editor.value?.commands.toggleUnderline()
}

function toggleHeading(_level: number) {
  editor.value?.chain().focus().setHeading({ level: 1 }).run()
}
</script>

<template>
  <div>
    <div class="toolbar">
      <button :class="{ active: isActive('bold') }" @click.prevent="toggleBold">
        Bold
      </button>
      <button :class="{ active: isActive('italic') }" @click.prevent="toggleItalic">
        Italic
      </button>
      <button :class="{ active: isActive('underline') }" @click.prevent="toggleUnderline">
        Underline
      </button>
      <button :class="{ active: isActive('heading', { level: 1 }) }" @click.prevent="toggleHeading(1)">
        H1
      </button>
      <button :class="{ active: isActive('heading', { level: 2 }) }" @click.prevent="toggleHeading(2)">
        H2
      </button>
      <!-- Other controls go here  -->
    </div>
    <EditorContent :editor="editor" class="border rounded-md p-4" />
  </div>
</template>

<style>
.toolbar {
  margin-bottom: 1em;
  button {
    margin-right: 5px;
    padding: 5px 10px;
    border: none;
    background: #f0f0f0;
    cursor: pointer;
    border-radius: 4px;
  }
  button.active {
    font-weight: bold;
    background: #d0d0ff;
  }
}
</style>
