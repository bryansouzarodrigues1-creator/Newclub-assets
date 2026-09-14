import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-md w-full border border-border bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 text-center">
        <h1 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Extensão Recebida</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium">
          O arquivo <strong>shark-git.zip</strong> foi recebido, mas não consigo inspecionar ou alterar automaticamente o código que está compactado dentro dele.
        </p>
        <div className="bg-slate-100 dark:bg-slate-700/50 rounded p-4 mb-6">
          <p className="text-sm text-slate-700 dark:text-slate-200">
            Para que eu possa remover a restrição corretamente, por favor, <strong>descompacte o zip</strong> na sua máquina e copie/cole os arquivos do código-fonte (como scripts e <code>manifest.json</code>) usando mensagens no chat.
          </p>
        </div>
        <a 
          href="/uploads/shark-git.zip" 
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Baixar shark-git.zip
        </a>
      </div>
    </div>
  )
}
