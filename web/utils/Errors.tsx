export function getErrors(data: object) {
  if (!data || data === {}) return []

  const info = []

  if (data.code !== undefined && data.detail !== undefined) {
    info.push({
      id: data.code,
      description: data.detail,
    })
  } else {
    for (const [key, value] of Object.entries(data)) {
      let val = "";
      if (value && typeof value === "string") {
        val = value
      }
      if (Array.isArray(value) && value.length > 0) {
        val = value[0]
      }

      info.push({
        id: key,
        description: val,
      })
    }
  }

  return info
}

