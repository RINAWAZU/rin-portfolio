const ENDPOINT = 'https://api.web3forms.com/submit'

export async function submitContactForm({ name, email, projectType, brief }) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim()
  if (!accessKey) {
    throw new Error('FORM_NOT_CONFIGURED')
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      subject: `[RIN Portfolio] ${projectType?.trim() || 'Inquiry'}`,
      message: brief,
      project_type: projectType?.trim() || '(not specified)',
      from_name: name,
      botcheck: '',
    }),
  })

  let data
  try {
    data = await response.json()
  } catch {
    throw new Error('SUBMIT_FAILED')
  }

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'SUBMIT_FAILED')
  }

  return data
}
