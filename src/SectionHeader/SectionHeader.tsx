import SectionHeaderCSS from './SectionHeader.module.css';

export const SectionHeader: React.FC<{label: string}> = ({label}) => {
    return (
      <div className={SectionHeaderCSS.sectionHeader}>{label}</div>
    )
  }