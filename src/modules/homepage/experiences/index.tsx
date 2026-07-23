import React from 'react'

type Experience = {
	id: string
	company: string
	role: string
	period: string
	description: string
}

const mockExperiences: Experience[] = [
	{
		id: '1',
		company: 'South TI',
		role: 'Desenvolvedor Frontend',
		period: 'Mai 2026 - Atual',
		description:
			'Atuação no desenvolvimento e manutenção de aplicações web utilizando PHP, JavaScript/jQuery, Bootstrap e Next.js. Responsável pela criação de interfaces responsivas, implementação de funcionalidades interativas, integração com APIs e otimização da experiência do usuário. Participação na manutenção e evolução de sistemas, correção de bugs e melhoria de performance, seguindo boas práticas de desenvolvimento e versionamento com Git. Experiência com metodologia ágil SCRUM, participando de reuniões diárias, planejamento de sprints e acompanhamento de demandas em equipe.'
	},
	{
		id: '2',
		company: 'South TI',
		role: 'Analista de Suporte Júnior',
		period: 'Mar 2025 - Mai 2026',
		description:
			'Prestação de atendimento helpdesk e presencial para empresas clientes, com foco em resolução de incidentes e manutenção da infraestrutura de TI. Responsável por suporte de hardware, software e configuração de estações, além de acompanhamento de chamados e documentação de procedimentos.'
	},
    {
		id: '3',
		company: 'Hospital Evandro Ribeiro',
		role: 'Estágio de Suporte T.I',
		period: 'Nov 2022 - Dez 2023',
		description:
			'Prestação de serviços na área de Informática na instituição, executar as rotinas de solução de problemas no setor de TIC – Tecnologia da Informação e TeleCom em conformidade com as exigências legais e normas internas deste hospital, auxiliando no controle da fila de chamados e no cronograma de atendimento, anotar recados, atender usuários, equipes de fornecedores e prestadores de serviços da área.'
	}
]

export const Experiences: React.FC = () => {
	return (
		<section id="experiences">
			<hr className="mb-20" />
			<div className="min-h-screen py-8 md:h-auto flex flex-col items-center">
				<h2 className="text-4xl font-medium">Experiências</h2>

				<div className="w-full max-w-4xl mt-8 bg-white dark:bg-bgheader p-6 rounded-md shadow-md relative">
					{/* linha vertical da timeline */}
					<div className="absolute left-6 top-6 bottom-6 w-[2px] bg-gray-300 dark:bg-gray-700" />

					<div className="relative pl-12">
						{mockExperiences.map((exp) => (
							<div key={exp.id} className="relative mb-8">
								{/* bolinha do marcador */}
								<div className="absolute -left-6 top-2 w-3 h-3 rounded-full bg-purple-800 border-2 border-white dark:border-bgheader" />

								<h3 className="text-xl font-semibold">{exp.role} — {exp.company}</h3>
								<p className="text-sm text-gray-500 dark:text-gray-300">{exp.period}</p>
								<p className="mt-2 text-sm">{exp.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experiences

