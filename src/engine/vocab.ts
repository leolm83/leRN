/** Respostas aceitas para um item de vocabulário: "to love" aceita "love"; "child / children" aceita cada parte. */
export function vocabAnswers(en: string): string[] {
  const out = new Set<string>([en])
  for (const part of en.split('/').map((p) => p.trim())) {
    const bare = part.replace(/\s*\([^)]*\)\s*/g, ' ').trim()
    for (const form of [part, bare]) {
      out.add(form)
      if (form.startsWith('to ')) out.add(form.slice(3))
    }
  }
  return [...out].filter(Boolean)
}
