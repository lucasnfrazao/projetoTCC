import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import UniversidadeProfilePage from './UniversidadeProfilePage'
import { API_BASE } from '../config.js';

export default function UniversidadePage() {
  const { id } = useParams();

  const [university, setUniversity] = useState(null)
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState(null)

  useEffect(() => {
    setLoading(true)

    const apiURL =  `${API_BASE}/universidades/${id}`;
    console.log(apiURL);
    fetch(apiURL)
      .then(res => {
        if (!res.ok) throw new Error('Not found')
        return res.json()
      })
      .then(data => {
        setUniversity(data)
        setError(null)
      })
      .catch(err => {
        console.error(err)
        setError(err)
      })
      .finally(() => setLoading(false))
  }, [id])

  // TODO: Handle loading + error -> caso universidade doesn't exist.

  if (loading) return <p>Carregando…</p>
  if (error)   return <p>Erro: {error.message}</p>

  return (
    <UniversidadeProfilePage university={university} />
  )
}