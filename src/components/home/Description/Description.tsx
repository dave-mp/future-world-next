"use client"

import Image from "next/image"
import classNames from "classnames/bind"
import { useState } from "react"
import styles from "./Description.module.sass"

const PLACEHOLDER_IMAGE =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABWAFYDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwQAAQUCBv/EAB0QAQADAQEBAQEBAAAAAAAAAAABAgMhMQQREkH/xAAZAQEAAwEBAAAAAAAAAAAAAAADAQIEAAX/xAAbEQEBAQEAAwEAAAAAAAAAAAAAAQIRAyExEv/aAAwDAQACEQMRAD8A8J+K/Bf5VNTZrrHEC0cxAucHnwNg2UGaQFlU3nQW1sqiFWgxFFWozc9k6TvBa53SpXSD+NXReUXPqNHRrmrmamJq4tDHmtVgMQLnVz+dGyjrTKLWTONTuWYGFWhjRTSnxVc1XzOVpxzenA2O6y9qENq/jX3p6zPohfKSNvUXb1C9dwzaArCzIV5ZctTj/RsfQP3o+M9aM1TUaPzx40sIZ3zT40sJ46g1DVaudK8d1nitJ4OqM/6YZP0tb6Z5LJ+qfXRaEL+oq/qLrizYK1g50cWuKQs0J/Q+Nukov0fG5Yn61/nt408LsX57+NDHRFotRqVvxWl+Fq6cVfTigrAvot6yvpn07vf1mfRb1McWvPUDvPUX4npadHM3Lf2n9p/KM7MxcfK/SNbD526itWfbUw0P5aMfK5vPQdqblq11VfXhKNEtorKHUd7aEdrCaXKa2LkOvQdp6jiZ6heKdZf66iURKnj+u6j5yiD09DxmspM0lEBotGiVzKIrA6BvJe6I0YZthT6iIaCf/9k="

export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false)
  const handleClick = () => setHasBorder(!hasBorder)
  const cx = classNames.bind(styles)

  const buttonStyles = cx("Description__button", {
    "Description__button--border": hasBorder,
  })

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world
          of cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  )
}
