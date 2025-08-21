import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Workout {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: "date" })
  date!: Date

  @Column({ type: "int" })
  meters!: number

  @Column({ type: "int" })
  fatigueLevel!: number // 1 a 5

  @Column({ type: "time", nullable: true })
  startTime?: string

  @Column({ type: "time", nullable: true })
  endTime?: string

  @Column({ type: "varchar", nullable: true })
  style?: string
}
