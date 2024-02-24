import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany, TableInheritance } from "typeorm"
import { User } from "./User"

// @ts-ignore
@Entity()
@Unique(["title"])
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @Column({ type: "varchar" })
    type: string

    @OneToMany(() => Comment, (comment) => comment.post, { cascade: true })
    comments: Comment[]
}

// Subclass Comment inherits from Post
@Entity()
export class Comment extends Post {
    @Column()
    text: string
}
